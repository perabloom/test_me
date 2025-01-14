// import React, { useState } from 'react';
// import { Box, Button, Input, Heading, Text, List, ListItem, Stack, useToast, Divider } from '@chakra-ui/react';
// import { Document, Page, Text as PDFText, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// // Define the styles for the PDF document
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontFamily: 'Helvetica',
//     backgroundColor: '#f4f4f4',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2a2a2a',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   table: {
//     width: '100%',
//     borderBottom: '1px solid #2a2a2a',
//     marginBottom: 20,
//   },
//   tableHeader: {
//     fontWeight: 'bold',
//     textAlign: 'left',
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   tableRow: {
//     textAlign: 'left',
//     padding: 10,
//   },
//   total: {
//     marginTop: 10,
//     textAlign: 'right',
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2a2a2a',
//   },
// });




// // Invoice PDF Component
// const InvoicePDF = ({ items, total }: { items: { description: string; price: string }[]; total: string }) => (
//   <Document>
//     <Page style={styles.page}>
//       <PDFText style={styles.header}>Estimate Invoice</PDFText>
//       <View>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <PDFText style={styles.tableHeader}>Item</PDFText>
//             <PDFText style={styles.tableHeader}>Price</PDFText>
//           </View>
//           {items.map((item, index) => (
//             <View style={styles.tableRow} key={index}>
//               <PDFText>{item.description}</PDFText>
//               <PDFText>${item.price}</PDFText>
//             </View>
//           ))}
//         </View>
//         <PDFText style={styles.total}>Total: ${total}</PDFText>
//       </View>
//     </Page>
//   </Document>
// );

// // Main Estimate Generator Component using Chakra UI
// const EstimateGenerator: React.FC = () => {
//   const [items, setItems] = useState<{ description: string; price: string }[]>([]);
//   const [description, setDescription] = useState<string>('');
//   const [price, setPrice] = useState<string>('');
//   const [total, setTotal] = useState<string>('0.00');
//   const toast = useToast();

//   // Add item to the list
//   const handleAddItem = () => {
//     if (!description || !price) {
//       toast({
//         title: 'Invalid input',
//         description: 'Please fill in both fields.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     const newItem = { description, price: parseFloat(price).toFixed(2) };
//     const updatedItems = [...items, newItem];
//     setItems(updatedItems);
//     setTotal(updatedItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2));
//     setDescription('');
//     setPrice('');
//   };

//   // Delete an item from the list
//   const handleDeleteItem = (index: number) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//     setTotal(updatedItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2));
//   };

//   return (
//     <Box maxW="600px" mx="auto" p={6} boxShadow="lg" borderRadius="md" bg="white">
//       <Heading as="h2" size="lg" color="teal.500" textAlign="center" mb={6}>
//         Contractor Estimate Generator
//       </Heading>

//       <Stack spacing={4}>
//         <Input
//           type="text"
//           placeholder="Item description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           isRequired
//         />
//         <Input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           isRequired
//         />
//         <Button colorScheme="teal" onClick={handleAddItem} size="lg" width="full">
//           Add Item
//         </Button>
//       </Stack>

//       <Divider my={6} />

//       <Heading as="h3" size="md" color="gray.700" mb={4}>
//         Estimate Items
//       </Heading>
//       <List spacing={3}>
//         {items.map((item, index) => (
//           <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
//             <Text>{item.description} - ${item.price}</Text>
//             <Button
//               colorScheme="red"
//               size="sm"
//               onClick={() => handleDeleteItem(index)}
//             >
//               Delete
//             </Button>
//           </ListItem>
//         ))}
//       </List>

//       <Divider my={4} />

//       <Text fontSize="lg" fontWeight="bold" color="gray.700" textAlign="right">
//         Total: ${total}
//       </Text>


//     </Box>
//   );
// };

// export default EstimateGenerator;


const EstimateGenerator = () => {
  return <div>Estimate Generator Component</div>;
};

export default EstimateGenerator;
