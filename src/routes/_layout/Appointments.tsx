import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
    Box,
    Container,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Button,
    Input,
    FormControl,
    FormLabel,
    Select,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ClientsService, StaffsService, AppointmentsService } from "../../client";
import { AppointmentCreate } from "../../client/types.gen";
import { createFileRoute } from "@tanstack/react-router";
import AddClientForm from "../../components/Common/AddClientForm";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
    getDay,
    locales,
});

export const Route = createFileRoute("/_layout/Appointments")({
    component: Appointments,
});
import { Appointment } from "../../client/types.gen";

export default function Appointments() {
    const [notes, setNotes] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClientModalOpen, setIsClientModalOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
    const [client, setClient] = useState("");
    const [staff, setStaff] = useState("");

    const { data: clients } = useQuery({
        queryKey: ["clients"],
        queryFn: () => ClientsService.readClients(),
    });
    const { data: staffs } = useQuery({
        queryKey: ["staffs"],
        queryFn: () => StaffsService.readStaffs(),
    });
    const { data: appointmentsData } = useQuery({
        queryKey: ["appointments"],
        queryFn: async () => {
            const response = await AppointmentsService.readAppointments();
            return response.map(appointment => ({
                ...appointment,
                appointment_start: new Date(appointment.appointment_start),
                appointment_end: new Date(appointment.appointment_end),
            }));
        },
    });


    const handleSelectSlot = (slotInfo: any) => {
        setSelectedSlot(slotInfo);
        setSelectedAppointment(null); // Ensure it's null for creating a new appointment
        setIsModalOpen(true);
    };

    const handleSelectEvent = (event: any) => {
        setSelectedAppointment(event);
        setIsModalOpen(true);
    };

    const handleClientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === "create") {
            setIsClientModalOpen(true);
        } else {
            setClient(value);
        }
    };
    const handleClientModalClose = (newClientId?: string) => {
        setIsClientModalOpen(false);
        if (newClientId) {
            setClient(newClientId); // Automatically select the new client
        }
    };



    const queryClient = useQueryClient();
    const handleAddAppointment = async () => {
        if (client && staff && selectedSlot) {
            const newAppointment: AppointmentCreate = {
                appointment_start: (selectedSlot as any).start.toISOString(),
                appointment_end: (selectedSlot as any).end.toISOString(),
                client_id: client,
                staff_ids: [staff],
                status: null,
                notes: notes,
                owner_id: null,
            };
            await AppointmentsService.createAppointment({ requestBody: newAppointment });
            queryClient.invalidateQueries({ queryKey: ["appointments"] }); // Invalidate the appointments query
            setIsModalOpen(false);
        }
    };

    const handleEditAppointment = (appointment: Appointment) => {
        setSelectedAppointment(appointment);
        setClient(appointment.client_id);
        //setStaff(appointment.staff_ids[0]);
        setNotes(appointment.notes || "");
        setIsModalOpen(true);
    };

    const handleDeleteAppointment = async (appointment?: Appointment) => {
        const appointmentToDelete = appointment || selectedAppointment;
        if (appointmentToDelete && appointmentToDelete.id) {
            try {
                await AppointmentsService.deleteAppointment({ appointmentId: appointmentToDelete.id });
                queryClient.invalidateQueries({ queryKey: ["appointments"] });
                setIsModalOpen(false);
            } catch (error) {
                console.error("Error deleting appointment:", error);
            }
        }
    };


    return (
        <Container maxW="full" mt={8} mb={8}>
            <Tabs variant="enclosed">
                <TabList>
                    <Tab>Upcoming Appointments</Tab>
                    <Tab>Book Appointment</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Date & Time</Th>
                                    <Th>Participants</Th>
                                    <Th>Address</Th>
                                    <Th>Notes</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {appointmentsData?.map((appointment) => (
                                    <Tr key={appointment.id}>
                                        <Td>
                                            {new Date(appointment.appointment_start).toLocaleString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                                hour: 'numeric',
                                                minute: 'numeric',
                                                hour12: true,
                                            })} - {new Date(appointment.appointment_start).getFullYear() === new Date(appointment.appointment_end).getFullYear() &&
                                                new Date(appointment.appointment_start).getMonth() === new Date(appointment.appointment_end).getMonth() &&
                                                new Date(appointment.appointment_start).getDate() === new Date(appointment.appointment_end).getDate()
                                                ? new Date(appointment.appointment_end).toLocaleString('en-US', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    hour12: true,
                                                })
                                                : new Date(appointment.appointment_end).toLocaleString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                    hour12: true,
                                                })
                                            }
                                        </Td>
                                        <Td>
                                            {clients?.find(client => client.id === appointment.client_id)?.first_name} {clients?.find(client => client.id === appointment.client_id)?.last_name || "N/A"}
                                        </Td>
                                        <Td>
                                            {clients?.find(client => client.id === appointment.client_id)?.address || "N/A"}
                                        </Td>
                                        <Td>{appointment.notes || "N/A"}</Td>
                                        <Td>
                                            <Button size="sm" colorScheme="blue" onClick={() => handleEditAppointment({
                                                ...appointment,
                                                appointment_start: appointment.appointment_start.toISOString(),
                                                appointment_end: appointment.appointment_end.toISOString()
                                            })}>
                                                Edit
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>

                        </Table>
                    </TabPanel>
                    <TabPanel>
                        <Box>
                            <Calendar
                                localizer={localizer}
                                events={appointmentsData || []}
                                startAccessor="appointment_start"
                                endAccessor="appointment_end"
                                style={{ height: 500 }}
                                selectable
                                onSelectSlot={handleSelectSlot}
                                onSelectEvent={handleSelectEvent}
                            />
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>


            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedAppointment ? "Edit Appointment" : "Add Appointment"}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Client</FormLabel>
                            <Select
                                placeholder="Select client"
                                value={selectedAppointment ? selectedAppointment.client_id : client}
                                onChange={handleClientChange}
                            >
                                {clients?.map((client: any) => (
                                    <option key={client.id} value={client.id}>
                                        {client.first_name} {client.last_name}
                                    </option>
                                ))}
                                <option value="create">Create New Client</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Staff</FormLabel>
                            <Select
                                placeholder="Select staff"
                                //TODO Backend change needed as we dont get staffs value={selectedAppointment ? selectedAppointment.staff_ids[0] : staff}
                                value={staff}
                                onChange={(e) => setStaff(e.target.value)}
                            >
                                {staffs?.map((staff: any) => (
                                    <option key={staff.id} value={staff.id}>
                                        {staff.name}
                                    </option>
                                ))}
                            </Select>

                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Notes</FormLabel>
                            <Input
                                placeholder="Add notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        {selectedAppointment && (
                            <Button colorScheme="red" mr={3} onClick={() => handleDeleteAppointment()}>
                                Delete
                            </Button>
                        )}
                        <Button colorScheme="blue" mr={3} onClick={handleAddAppointment}>
                            {selectedAppointment ? "Update" : "Add"}
                        </Button>
                        <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>



            <Modal isOpen={isClientModalOpen} onClose={() => setIsClientModalOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Client</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddClientForm isOpen={isClientModalOpen} onClose={handleClientModalClose} />
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" onClick={() => setIsClientModalOpen(false)}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Container>
    );
}
