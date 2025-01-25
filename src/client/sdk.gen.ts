// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from "./core/CancelablePromise"
import { OpenAPI } from "./core/OpenAPI"
import { request as __request } from "./core/request"
import type {
  AppointmentsCreateAppointmentData,
  AppointmentsCreateAppointmentResponse,
  AppointmentsReadAppointmentsData,
  AppointmentsReadAppointmentsResponse,
  AppointmentsReadAppointmentData,
  AppointmentsReadAppointmentResponse,
  AppointmentsUpdateAppointmentData,
  AppointmentsUpdateAppointmentResponse,
  AppointmentsDeleteAppointmentData,
  AppointmentsDeleteAppointmentResponse,
  BusinessesReadBusinessesData,
  BusinessesReadBusinessesResponse,
  BusinessesCreateBusinessData,
  BusinessesCreateBusinessResponse,
  BusinessesReadBusinessData,
  BusinessesReadBusinessResponse,
  BusinessesUpdateBusinessData,
  BusinessesUpdateBusinessResponse,
  BusinessesDeleteBusinessData,
  BusinessesDeleteBusinessResponse,
  ClientsCreateClientData,
  ClientsCreateClientResponse,
  ClientsReadClientsData,
  ClientsReadClientsResponse,
  ClientsUpdateClientData,
  ClientsUpdateClientResponse,
  ClientsDeleteClientData,
  ClientsDeleteClientResponse,
  ClientsReadClientData,
  ClientsReadClientResponse,
  GoogleBusinessAuthorizeGoogleBusinessResponse,
  GoogleBusinessOauth2CallbackResponse,
  ItemsReadItemsData,
  ItemsReadItemsResponse,
  ItemsCreateItemData,
  ItemsCreateItemResponse,
  ItemsReadItemData,
  ItemsReadItemResponse,
  ItemsUpdateItemData,
  ItemsUpdateItemResponse,
  ItemsDeleteItemData,
  ItemsDeleteItemResponse,
  LoginLoginAccessTokenData,
  LoginLoginAccessTokenResponse,
  LoginTestTokenResponse,
  LoginRecoverPasswordData,
  LoginRecoverPasswordResponse,
  LoginResetPasswordData,
  LoginResetPasswordResponse,
  LoginRecoverPasswordHtmlContentData,
  LoginRecoverPasswordHtmlContentResponse,
  MetaVerifyWebhookResponse,
  MetaMetaWebhookResponse,
  MetaHandleInstagramAuthData,
  MetaHandleInstagramAuthResponse,
  MetaFetchInstagramProfileResponse,
  MetaFetchInstagramPostsResponse,
  MetaCreateInstagramPostData,
  MetaCreateInstagramPostResponse,
  MetaIsInstagramConnectedResponse,
  MetaDisconnectInstagramResponse,
  PrivateCreateUserData,
  PrivateCreateUserResponse,
  StaffsCreateStaffData,
  StaffsCreateStaffResponse,
  StaffsReadStaffsData,
  StaffsReadStaffsResponse,
  StaffsReadStaffData,
  StaffsReadStaffResponse,
  StaffsUpdateStaffData,
  StaffsUpdateStaffResponse,
  StaffsDeleteStaffData,
  StaffsDeleteStaffResponse,
  UsersReadUsersData,
  UsersReadUsersResponse,
  UsersCreateUserData,
  UsersCreateUserResponse,
  UsersReadUserMeResponse,
  UsersDeleteUserMeResponse,
  UsersUpdateUserMeData,
  UsersUpdateUserMeResponse,
  UsersUpdatePasswordMeData,
  UsersUpdatePasswordMeResponse,
  UsersRegisterUserData,
  UsersRegisterUserResponse,
  UsersReadUserByIdData,
  UsersReadUserByIdResponse,
  UsersUpdateUserData,
  UsersUpdateUserResponse,
  UsersDeleteUserData,
  UsersDeleteUserResponse,
  UsersGetOnboardingStatusResponse,
  UsersSetOnboardingStatusData,
  UsersSetOnboardingStatusResponse,
  UtilsTestEmailData,
  UtilsTestEmailResponse,
  UtilsHealthCheckResponse,
  UtilsGetFacebookUserData,
  UtilsGetFacebookUserResponse,
} from "./types.gen"

export class AppointmentsService {
  /**
   * Create Appointment
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Appointment Successful Response
   * @throws ApiError
   */
  public static createAppointment(
    data: AppointmentsCreateAppointmentData,
  ): CancelablePromise<AppointmentsCreateAppointmentResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/appointments/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Appointments
   * @param data The data for the request.
   * @param data.skip
   * @param data.limit
   * @param data.businessId
   * @returns Appointment Successful Response
   * @throws ApiError
   */
  public static readAppointments(
    data: AppointmentsReadAppointmentsData = {},
  ): CancelablePromise<AppointmentsReadAppointmentsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/appointments/",
      query: {
        skip: data.skip,
        limit: data.limit,
        business_id: data.businessId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Appointment
   * @param data The data for the request.
   * @param data.appointmentId
   * @param data.businessId
   * @returns Appointment Successful Response
   * @throws ApiError
   */
  public static readAppointment(
    data: AppointmentsReadAppointmentData,
  ): CancelablePromise<AppointmentsReadAppointmentResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/appointments/{appointment_id}",
      path: {
        appointment_id: data.appointmentId,
      },
      query: {
        business_id: data.businessId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update Appointment
   * @param data The data for the request.
   * @param data.appointmentId
   * @param data.requestBody
   * @param data.businessId
   * @returns Appointment Successful Response
   * @throws ApiError
   */
  public static updateAppointment(
    data: AppointmentsUpdateAppointmentData,
  ): CancelablePromise<AppointmentsUpdateAppointmentResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/appointments/{appointment_id}",
      path: {
        appointment_id: data.appointmentId,
      },
      query: {
        business_id: data.businessId,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Delete Appointment
   * @param data The data for the request.
   * @param data.appointmentId
   * @param data.businessId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteAppointment(
    data: AppointmentsDeleteAppointmentData,
  ): CancelablePromise<AppointmentsDeleteAppointmentResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/appointments/{appointment_id}",
      path: {
        appointment_id: data.appointmentId,
      },
      query: {
        business_id: data.businessId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class BusinessesService {
  /**
   * Read Businesses
   * # Query all businesses owned by the current user
   * statement = select(Business).filter_by(owner_id=current_user.id).offset(skip).limit(limit)
   * businesses = session.exec(statement)().all()  # Use scalars() to specify the return type
   * return businesses
   * @param data The data for the request.
   * @param data.skip
   * @param data.limit
   * @returns Business Successful Response
   * @throws ApiError
   */
  public static readBusinesses(
    data: BusinessesReadBusinessesData = {},
  ): CancelablePromise<BusinessesReadBusinessesResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/businesses/",
      query: {
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Create Business
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Business Successful Response
   * @throws ApiError
   */
  public static createBusiness(
    data: BusinessesCreateBusinessData,
  ): CancelablePromise<BusinessesCreateBusinessResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/businesses/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Business
   * @param data The data for the request.
   * @param data.businessId
   * @returns Business Successful Response
   * @throws ApiError
   */
  public static readBusiness(
    data: BusinessesReadBusinessData,
  ): CancelablePromise<BusinessesReadBusinessResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/businesses/{business_id}",
      path: {
        business_id: data.businessId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update Business
   * @param data The data for the request.
   * @param data.businessId
   * @param data.requestBody
   * @returns Business Successful Response
   * @throws ApiError
   */
  public static updateBusiness(
    data: BusinessesUpdateBusinessData,
  ): CancelablePromise<BusinessesUpdateBusinessResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/businesses/{business_id}",
      path: {
        business_id: data.businessId,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Delete Business
   * @param data The data for the request.
   * @param data.businessId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteBusiness(
    data: BusinessesDeleteBusinessData,
  ): CancelablePromise<BusinessesDeleteBusinessResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/businesses/{business_id}",
      path: {
        business_id: data.businessId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class ClientsService {
  /**
   * Create Client
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Client Successful Response
   * @throws ApiError
   */
  public static createClient(
    data: ClientsCreateClientData,
  ): CancelablePromise<ClientsCreateClientResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/clients/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Clients
   * @param data The data for the request.
   * @param data.businessId
   * @param data.skip
   * @param data.limit
   * @returns Client Successful Response
   * @throws ApiError
   */
  public static readClients(
    data: ClientsReadClientsData = {},
  ): CancelablePromise<ClientsReadClientsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/clients/",
      query: {
        business_id: data.businessId,
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update Client
   * @param data The data for the request.
   * @param data.clientId
   * @param data.requestBody
   * @param data.businessId
   * @returns Client Successful Response
   * @throws ApiError
   */
  public static updateClient(
    data: ClientsUpdateClientData,
  ): CancelablePromise<ClientsUpdateClientResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/clients/{client_id}",
      path: {
        client_id: data.clientId,
      },
      query: {
        business_id: data.businessId,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Delete Client
   * @param data The data for the request.
   * @param data.clientId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteClient(
    data: ClientsDeleteClientData,
  ): CancelablePromise<ClientsDeleteClientResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/clients/{client_id}",
      path: {
        client_id: data.clientId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Client
   * @param data The data for the request.
   * @param data.clientId
   * @returns Client Successful Response
   * @throws ApiError
   */
  public static readClient(
    data: ClientsReadClientData,
  ): CancelablePromise<ClientsReadClientResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/clients/{client_id}",
      path: {
        client_id: data.clientId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class GoogleBusinessService {
  /**
   * Authorize Google Business
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static authorizeGoogleBusiness(): CancelablePromise<GoogleBusinessAuthorizeGoogleBusinessResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/google_business/authorize-google-business",
    })
  }

  /**
   * Oauth2Callback
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static oauth2Callback(): CancelablePromise<GoogleBusinessOauth2CallbackResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/google_business/oauth2callback",
    })
  }
}

export class ItemsService {
  /**
   * Read Items
   * Retrieve items.
   * @param data The data for the request.
   * @param data.skip
   * @param data.limit
   * @returns ItemsPublic Successful Response
   * @throws ApiError
   */
  public static readItems(
    data: ItemsReadItemsData = {},
  ): CancelablePromise<ItemsReadItemsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/items/",
      query: {
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Create Item
   * Create new item.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static createItem(
    data: ItemsCreateItemData,
  ): CancelablePromise<ItemsCreateItemResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/items/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Item
   * Get item by ID.
   * @param data The data for the request.
   * @param data.id
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static readItem(
    data: ItemsReadItemData,
  ): CancelablePromise<ItemsReadItemResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/items/{id}",
      path: {
        id: data.id,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update Item
   * Update an item.
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns ItemPublic Successful Response
   * @throws ApiError
   */
  public static updateItem(
    data: ItemsUpdateItemData,
  ): CancelablePromise<ItemsUpdateItemResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/items/{id}",
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Delete Item
   * Delete an item.
   * @param data The data for the request.
   * @param data.id
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteItem(
    data: ItemsDeleteItemData,
  ): CancelablePromise<ItemsDeleteItemResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/items/{id}",
      path: {
        id: data.id,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class LoginService {
  /**
   * Login Access Token
   * OAuth2 compatible token login, get an access token for future requests
   * @param data The data for the request.
   * @param data.formData
   * @returns Token Successful Response
   * @throws ApiError
   */
  public static loginAccessToken(
    data: LoginLoginAccessTokenData,
  ): CancelablePromise<LoginLoginAccessTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/login/access-token",
      formData: data.formData,
      mediaType: "application/x-www-form-urlencoded",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Test Token
   * Test access token
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static testToken(): CancelablePromise<LoginTestTokenResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/login/test-token",
    })
  }

  /**
   * Recover Password
   * Password Recovery
   * @param data The data for the request.
   * @param data.email
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static recoverPassword(
    data: LoginRecoverPasswordData,
  ): CancelablePromise<LoginRecoverPasswordResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/password-recovery/{email}",
      path: {
        email: data.email,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Reset Password
   * Reset password
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static resetPassword(
    data: LoginResetPasswordData,
  ): CancelablePromise<LoginResetPasswordResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/reset-password/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Recover Password Html Content
   * HTML Content for Password Recovery
   * @param data The data for the request.
   * @param data.email
   * @returns string Successful Response
   * @throws ApiError
   */
  public static recoverPasswordHtmlContent(
    data: LoginRecoverPasswordHtmlContentData,
  ): CancelablePromise<LoginRecoverPasswordHtmlContentResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/password-recovery-html-content/{email}",
      path: {
        email: data.email,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class MetaService {
  /**
   * Verify Webhook
   * Verify webhook subscription from Facebook and Instagram.
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static verifyWebhook(): CancelablePromise<MetaVerifyWebhookResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/meta/webhook",
    })
  }

  /**
   * Meta Webhook
   * Handle webhook events from Facebook and Instagram.
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static metaWebhook(): CancelablePromise<MetaMetaWebhookResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/meta/webhook",
    })
  }

  /**
   * Handle Instagram Auth
   * Handle Instagram authorization code and exchange it for an access token.
   * @param data The data for the request.
   * @param data.code
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static handleInstagramAuth(
    data: MetaHandleInstagramAuthData,
  ): CancelablePromise<MetaHandleInstagramAuthResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/meta/auth/instagram",
      query: {
        code: data.code,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Fetch Instagram Profile
   * Fetch the Instagram user's profile picture and basic info.
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static fetchInstagramProfile(): CancelablePromise<MetaFetchInstagramProfileResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/meta/instagram/profile",
    })
  }

  /**
   * Fetch Instagram Posts
   * Fetch the Instagram user's recent posts.
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static fetchInstagramPosts(): CancelablePromise<MetaFetchInstagramPostsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/meta/instagram/posts",
    })
  }

  /**
   * Create Instagram Post
   * Create and publish a post on Instagram.
   * @param data The data for the request.
   * @param data.imageUrl
   * @param data.caption
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static createInstagramPost(
    data: MetaCreateInstagramPostData,
  ): CancelablePromise<MetaCreateInstagramPostResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/meta/instagram/post",
      query: {
        image_url: data.imageUrl,
        caption: data.caption,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Is Instagram Connected
   * Check if the user is connected to Instagram and if the access token is still valid.
   * @returns boolean Successful Response
   * @throws ApiError
   */
  public static isInstagramConnected(): CancelablePromise<MetaIsInstagramConnectedResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/meta/instagram/connected",
    })
  }

  /**
   * Disconnect Instagram
   * Disconnect the user's Instagram account by removing the access token and expiration date.
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static disconnectInstagram(): CancelablePromise<MetaDisconnectInstagramResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/meta/instagram/disconnect",
    })
  }
}

export class PrivateService {
  /**
   * Create User
   * Create a new user.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static createUser(
    data: PrivateCreateUserData,
  ): CancelablePromise<PrivateCreateUserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/private/users/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class StaffsService {
  /**
   * Create Staff
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Staff Successful Response
   * @throws ApiError
   */
  public static createStaff(
    data: StaffsCreateStaffData,
  ): CancelablePromise<StaffsCreateStaffResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/staffs/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Staffs
   * @param data The data for the request.
   * @param data.businessId
   * @param data.skip
   * @param data.limit
   * @returns Staff Successful Response
   * @throws ApiError
   */
  public static readStaffs(
    data: StaffsReadStaffsData = {},
  ): CancelablePromise<StaffsReadStaffsResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/staffs/",
      query: {
        business_id: data.businessId,
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read Staff
   * @param data The data for the request.
   * @param data.staffId
   * @returns Staff Successful Response
   * @throws ApiError
   */
  public static readStaff(
    data: StaffsReadStaffData,
  ): CancelablePromise<StaffsReadStaffResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/staffs/{staff_id}",
      path: {
        staff_id: data.staffId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update Staff
   * @param data The data for the request.
   * @param data.staffId
   * @param data.requestBody
   * @returns Staff Successful Response
   * @throws ApiError
   */
  public static updateStaff(
    data: StaffsUpdateStaffData,
  ): CancelablePromise<StaffsUpdateStaffResponse> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/staffs/{staff_id}",
      path: {
        staff_id: data.staffId,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Delete Staff
   * @param data The data for the request.
   * @param data.staffId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteStaff(
    data: StaffsDeleteStaffData,
  ): CancelablePromise<StaffsDeleteStaffResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/staffs/{staff_id}",
      path: {
        staff_id: data.staffId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class UsersService {
  /**
   * Read Users
   * Retrieve users.
   * @param data The data for the request.
   * @param data.skip
   * @param data.limit
   * @returns UsersPublic Successful Response
   * @throws ApiError
   */
  public static readUsers(
    data: UsersReadUsersData = {},
  ): CancelablePromise<UsersReadUsersResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users/",
      query: {
        skip: data.skip,
        limit: data.limit,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Create User
   * Create new user.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static createUser(
    data: UsersCreateUserData,
  ): CancelablePromise<UsersCreateUserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users/",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read User Me
   * Get current user.
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static readUserMe(): CancelablePromise<UsersReadUserMeResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users/me",
    })
  }

  /**
   * Delete User Me
   * Delete own user.
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteUserMe(): CancelablePromise<UsersDeleteUserMeResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/users/me",
    })
  }

  /**
   * Update User Me
   * Update own user.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static updateUserMe(
    data: UsersUpdateUserMeData,
  ): CancelablePromise<UsersUpdateUserMeResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users/me",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update Password Me
   * Update own password.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static updatePasswordMe(
    data: UsersUpdatePasswordMeData,
  ): CancelablePromise<UsersUpdatePasswordMeResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users/me/password",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Register User
   * Create new user without the need to be logged in.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static registerUser(
    data: UsersRegisterUserData,
  ): CancelablePromise<UsersRegisterUserResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users/signup",
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Read User By Id
   * Get a specific user by id.
   * @param data The data for the request.
   * @param data.userId
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static readUserById(
    data: UsersReadUserByIdData,
  ): CancelablePromise<UsersReadUserByIdResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users/{user_id}",
      path: {
        user_id: data.userId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Update User
   * Update a user.
   * @param data The data for the request.
   * @param data.userId
   * @param data.requestBody
   * @returns UserPublic Successful Response
   * @throws ApiError
   */
  public static updateUser(
    data: UsersUpdateUserData,
  ): CancelablePromise<UsersUpdateUserResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users/{user_id}",
      path: {
        user_id: data.userId,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Delete User
   * Delete a user.
   * @param data The data for the request.
   * @param data.userId
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static deleteUser(
    data: UsersDeleteUserData,
  ): CancelablePromise<UsersDeleteUserResponse> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/users/{user_id}",
      path: {
        user_id: data.userId,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Get Onboarding Status
   * Get onboarding status for the current user.
   * @returns boolean Successful Response
   * @throws ApiError
   */
  public static getOnboardingStatus(): CancelablePromise<UsersGetOnboardingStatusResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users/me/onboarding",
    })
  }

  /**
   * Set Onboarding Status
   * Set onboarding status for the current user.
   * @param data The data for the request.
   * @param data.status
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static setOnboardingStatus(
    data: UsersSetOnboardingStatusData,
  ): CancelablePromise<UsersSetOnboardingStatusResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users/me/onboarding",
      query: {
        status: data.status,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}

export class UtilsService {
  /**
   * Test Email
   * Test emails.
   * @param data The data for the request.
   * @param data.emailTo
   * @returns Message Successful Response
   * @throws ApiError
   */
  public static testEmail(
    data: UtilsTestEmailData,
  ): CancelablePromise<UtilsTestEmailResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/utils/test-email/",
      query: {
        email_to: data.emailTo,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }

  /**
   * Health Check
   * @returns boolean Successful Response
   * @throws ApiError
   */
  public static healthCheck(): CancelablePromise<UtilsHealthCheckResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/utils/health-check/",
    })
  }

  /**
   * Get Facebook User
   * Get Facebook user data using access token.
   * @param data The data for the request.
   * @param data.accessToken
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static getFacebookUser(
    data: UtilsGetFacebookUserData,
  ): CancelablePromise<UtilsGetFacebookUserResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/utils/facebook-user/",
      query: {
        access_token: data.accessToken,
      },
      errors: {
        422: "Validation Error",
      },
    })
  }
}
