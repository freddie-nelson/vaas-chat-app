export interface Response {
  success: boolean;
}

/**
 * A request to get a checkout link for a stripe product
 */
export interface CheckoutLinkRequest {
  /**
   *The different types of products that can be purchased on stripe
   *
   *0 - PREMIUM
   */
  product: StripeProduct;
}

/**
 * A record representing a request to create a variable.
 */
export interface CreateVariableRequest {
  /**
   * The name of the variable
   */
  name?: string;
  /**
   * The value of the variable
   */
  value?: any;
  /**
   * Whether the variable is nullable
   */
  isNullable: boolean;
  /**
   *Represents the visibility of the variable.
   *
   *0 - PRIVATE
   *1 - PUBLIC_READONLY
   *2 - PUBLIC
   */
  visibility: VariableVisibility;
  /**
   *Represents the type of the variable.
   *
   *0 - INT
   *1 - DOUBLE
   *2 - STRING
   *3 - BOOL
   *4 - JSON
   */
  type: VariableType;
  /**
   * An optional api key to use for authentication
   */
  apiKey?: string;
}

/**
 * A class to represent an error response.
 */
export interface ErrorResponse extends Response {
  /**
   * Whether the response was successful. Will always be false.
   */
  success: false;
  /**
   * The reason for the error.
   */
  reason?: string;
}

/**
 * A class to represent a success response.
 */
export interface Int32SuccessResponse extends Response {
  /**
   * Whether the response was successful. Will always be true.
   */
  success: true;
  /**
   * The data contained in the response.
   */
  data: number;
}

/**
 * A record representing a login request.
 */
export interface LoginRequest {
  /**
   * The email to login with
   */
  email?: string;
  /**
   * The password to attempt to login with
   */
  password?: string;
}

/**
 * A record representing a patch user request.
 */
export interface PatchUserRequest {
  /**
   * The new username or null
   */
  username?: string;
  /**
   *Represents the permissions a user has over the variable.
   *
   *0 - NONE
   *1 - READ
   *2 - WRITE
   *3 - READ_WRITE
   *4 - READ_WRITE_CREATE
   *5 - READ_WRITE_CREATE_DELETE
   */
  apiKeyPermissions: VariablePermissions;
}

/**
 * A record representing a request to patch a variable.
 */
export interface PatchVariableRequest {
  /**
   * The new name of the variable or null
   */
  name?: string;
  /**
   * The new value of the variable or null
   */
  value?: any;
  /**
   * The new value for IsNullable or null
   */
  isNullable?: boolean;
  /**
   *Represents the visibility of the variable.
   *
   *0 - PRIVATE
   *1 - PUBLIC_READONLY
   *2 - PUBLIC
   */
  visibility?: VariableVisibility;
  /**
   * An optional api key to use for authentication
   */
  apiKey?: string;
}

/**
 * A record that represents a quota at a given time for a user.
 */
export interface Quota {
  /**
   * The number of requests made with the user's api key
   */
  apiKeyRequests: number;
  /**
   * The number of requests made with the user's jwt
   */
  loggedInRequests: number;
  /**
   * The time the quota measurement started
   */
  createdTime: string;
}

/**
 * A class to represent a success response.
 */
export interface QuotaListSuccessResponse extends Response {
  /**
   * Whether the response was successful. Will always be true.
   */
  success: true;
  /**
   * The data contained in the response.
   */
  data?: Quota[];
}

/**
 * A record representing a register request.
 */
export interface RegisterRequest {
  /**
   * The email to register with
   */
  email?: string;
  /**
   * The username to register with
   */
  username?: string;
  /**
   * The password to register with
   */
  password?: string;
}

/**
 * A class to represent a success response.
 */
export interface StringSuccessResponse extends Response {
  /**
   * Whether the response was successful. Will always be true.
   */
  success: true;
  /**
   * The data contained in the response.
   */
  data?: string;
}

/**
 *The different types of products that can be purchased on stripe
 *
 *0 - PREMIUM
 */
export enum StripeProduct {
  PREMIUM,
}

/**
 * A class that represents a User.
 */
export interface User {
  /**
   * The id of the user.
   */
  id: number;
  /**
   * The email of the user.
   */
  email?: string;
  /**
   * The username of the user.
   */
  username?: string;
  /**
   *Represents the permissions a user has over the variable.
   *
   *0 - NONE
   *1 - READ
   *2 - WRITE
   *3 - READ_WRITE
   *4 - READ_WRITE_CREATE
   *5 - READ_WRITE_CREATE_DELETE
   */
  apiKeyPermissions: VariablePermissions;
  /**
   * Wether or not the user has verified their email.
   */
  isVerified: boolean;
  /**
   *The type of the user.
   *
   *0 - STANDARD
   *1 - PREMIUM
   *2 - ADMIN
   */
  type: UserType;
}

/**
 * A class to represent a success response.
 */
export interface UserSuccessResponse extends Response {
  /**
   * Whether the response was successful. Will always be true.
   */
  success: true;
  /**
   * A class that represents a User.
   */
  data: User;
}

/**
 *The type of the user.
 *
 *0 - STANDARD
 *1 - PREMIUM
 *2 - ADMIN
 */
export enum UserType {
  STANDARD,
  PREMIUM,
  ADMIN,
}

/**
 * Represents a Variable.
 */
export interface Variable {
  /**
   * The id of the variable.
   */
  id: number;
  /**
   * The name of the variable.
   */
  name?: string;
  /**
   *Represents the type of the variable.
   *
   *0 - INT
   *1 - DOUBLE
   *2 - STRING
   *3 - BOOL
   *4 - JSON
   */
  type: VariableType;
  /**
   *Represents the visibility of the variable.
   *
   *0 - PRIVATE
   *1 - PUBLIC_READONLY
   *2 - PUBLIC
   */
  visibility: VariableVisibility;
  /**
   * Wether or not the variable is nullable.
   */
  isNullable: boolean;
  /**
   *The value of the variable.
   *
   *If the value is a json element, it will be converted to the correct type.
   */
  value?: any;
  /**
   * The id of the user that owns the variable.
   */
  userId: number;
}

/**
 * A class to represent a success response.
 */
export interface VariableListSuccessResponse extends Response {
  /**
   * Whether the response was successful. Will always be true.
   */
  success: true;
  /**
   * The data contained in the response.
   */
  data?: Variable[];
}

/**
 *Represents the permissions a user has over the variable.
 *
 *0 - NONE
 *1 - READ
 *2 - WRITE
 *3 - READ_WRITE
 *4 - READ_WRITE_CREATE
 *5 - READ_WRITE_CREATE_DELETE
 */
export enum VariablePermissions {
  NONE,
  READ,
  WRITE,
  READ_WRITE,
  READ_WRITE_CREATE,
  READ_WRITE_CREATE_DELETE,
}

/**
 * A class to represent a success response.
 */
export interface VariableSuccessResponse extends Response {
  /**
   * Whether the response was successful. Will always be true.
   */
  success: true;
  /**
   * Represents a Variable.
   */
  data: Variable;
}

/**
 *Represents the type of the variable.
 *
 *0 - INT
 *1 - DOUBLE
 *2 - STRING
 *3 - BOOL
 *4 - JSON
 */
export enum VariableType {
  INT,
  DOUBLE,
  STRING,
  BOOL,
  JSON,
}

/**
 *Represents the visibility of the variable.
 *
 *0 - PRIVATE
 *1 - PUBLIC_READONLY
 *2 - PUBLIC
 */
export enum VariableVisibility {
  PRIVATE,
  PUBLIC_READONLY,
  PUBLIC,
}

/**
 * The api client for variable as a service.
 */
export default class VaasApi {
  private serverUrl: URL;

  private apiKey?: string;

  private jwtKey = "jwt";
  private jwt?: string;

  /**
   * Gets the API key that is currently being used for authentication.
   *
   * @returns The API key.
   */
  getCachedApi() {
    return this.apiKey;
  }

  /**
   * Gets the jwt currently being used for authentication.
   *
   * @returns The jwt.
   */
  getJwt() {
    return this.jwt;
  }

  /**
   * Creates an instance of the VaasApi client.
   */
  constructor(serverUrl: string | URL) {
    if (serverUrl instanceof URL) {
      this.serverUrl = serverUrl;
    } else {
      this.serverUrl = new URL(serverUrl);
    }
  }

  /**
   * Authenticate with the api using an email and password.
   *
   * @param email The email to authenticate with
   * @param password The password to authenticate with
   *
   * @returns A promise that resolves when the authentication is complete
   */
  async authenticate(
    email: string,
    password: string,
  ): Promise<ReturnType<VaasApi["login"]>>;

  /**
   * Authenticate with the api using an api key.
   *
   * This does not check if the api key is valid, it just stores it for future requests.
   *
   * @param apiKey The api key to authenticate with
   *
   * @returns A promise that resolves when the authentication is complete
   */
  async authenticate(apiKey: string): Promise<void>;

  async authenticate(
    email: string,
    password?: string,
  ): Promise<void | ReturnType<VaasApi["login"]>> {
    if (password === undefined) {
      this.apiKey = email;
    } else {
      return await this.login({ email, password });
    }
  }

  private async request<T>(
    path: string,
    method: "GET" | "POST" | "CREATE" | "DELETE" | "PATCH" | "PUT",
    body: any,
    queryString: string,
  ): Promise<T> {
    const url = new URL(this.serverUrl.origin + path);
    url.search = queryString;

    let json: string | undefined = undefined;
    if (body !== undefined && body !== null) {
      try {
        json = JSON.stringify(body);
      } catch (e) {
        throw new Error("Could not convert body to json");
      }
    }

    try {
      const response = await fetch(url.href, {
        method: method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: this.jwt ? `${this.jwtKey}=${this.jwt}` : "",
        },
        body: json,
      });

      const setCookieHeader = response.headers.get("Set-Cookie");
      if (setCookieHeader?.includes(this.jwtKey)) {
        this.jwt = setCookieHeader.split(`${this.jwtKey}=`)[1].split(";")[0];
      }

      return (await response.json()) as T;
    } catch (e) {
      console.error(e);

      return (<ErrorResponse>{
        success: false,
        reason: e?.toString(),
      }) as T;
    }
  }

  /**
 *Gets a hello message. 
*
*Can be used to test if the api is available/working.
 *

 *
 * @returns On success StringSuccessResponse, otherwise StringSuccessResponse 
 */
  hello(): Promise<StringSuccessResponse | StringSuccessResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/hello";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<StringSuccessResponse | StringSuccessResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Login as a user.
 *
 * @param body A record representing a login request.

 *
 * @returns On success UserSuccessResponse, otherwise ErrorResponse 
 */
  login(body: LoginRequest): Promise<UserSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/auth/login";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<UserSuccessResponse | ErrorResponse>(
      path,
      "POST",
      body,
      queryString,
    );
  }

  /**
 *Attempt to login with the jwt cookie.
*
*Will also refresh the jwt cookie if it is present.
 *

 *
 * @returns On success UserSuccessResponse, otherwise ErrorResponse 
 */
  loginJwt(): Promise<UserSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/auth/login-jwt";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<UserSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Register a new user.
 *
 * @param body A record representing a register request.

 *
 * @returns On success UserSuccessResponse, otherwise ErrorResponse 
 */
  register(
    body: RegisterRequest,
  ): Promise<UserSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/auth/register";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<UserSuccessResponse | ErrorResponse>(
      path,
      "POST",
      body,
      queryString,
    );
  }

  /**
 * Verify a user's email.
 *
 * @param email The email of the user to verify
 * @param code The verification code recieved

 *
 * @returns On success StringSuccessResponse, otherwise ErrorResponse 
 */
  verify(
    email: string,
    code: string,
  ): Promise<StringSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [
      {
        name: "email",
        value: email,
      },
      {
        name: "code",
        value: code,
      },
    ];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/auth/verify";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<StringSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Request a verification email to be sent to the given email address.
 *
 * @param email The email address requesting verification

 *
 * @returns On success StringSuccessResponse, otherwise ErrorResponse 
 */
  requestVerify(email: string): Promise<StringSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [
      {
        name: "email",
        value: email,
      },
    ];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/auth/request-verify";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<StringSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Gets a variable by id.
 *
 * @param id The id of the variable to get

 *
 * @returns On success VariableSuccessResponse, otherwise ErrorResponse 
 */
  getVariable(id: number): Promise<VariableSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (true) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/var/{id}";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<VariableSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Updates a variable by id.
 *
 * @param id The id of the variable to update
 * @param body A record representing a request to patch a variable.

 *
 * @returns On success VariableSuccessResponse, otherwise ErrorResponse 
 */
  updateVariable(
    id: number,
    body: PatchVariableRequest,
  ): Promise<VariableSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/var/{id}";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    if (
      "apiKey" in body &&
      (body.apiKey === undefined || body.apiKey === null)
    ) {
      body.apiKey = this.apiKey;
    }

    return this.request<VariableSuccessResponse | ErrorResponse>(
      path,
      "PATCH",
      body,
      queryString,
    );
  }

  /**
 * Deletes a variable by id.
 *
 * @param id The id of the variable to delete

 *
 * @returns On success VariableSuccessResponse, otherwise ErrorResponse 
 */
  deleteVariable(id: number): Promise<VariableSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (true) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/var/{id}";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<VariableSuccessResponse | ErrorResponse>(
      path,
      "DELETE",
      null,
      queryString,
    );
  }

  /**
 * Creates a new variable.
 *
 * @param body A record representing a request to create a variable.

 *
 * @returns On success VariableSuccessResponse, otherwise ErrorResponse 
 */
  createVariable(
    body: CreateVariableRequest,
  ): Promise<VariableSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/var/create";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    if (
      "apiKey" in body &&
      (body.apiKey === undefined || body.apiKey === null)
    ) {
      body.apiKey = this.apiKey;
    }

    return this.request<VariableSuccessResponse | ErrorResponse>(
      path,
      "POST",
      body,
      queryString,
    );
  }

  /**
 * Gets a user by id.
 *
 * @param id The id of the user to get

 *
 * @returns On success UserSuccessResponse, otherwise ErrorResponse 
 */
  getUser(id: number): Promise<UserSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/user/{id}";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<UserSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Updates a user by id.
 *
 * @param id The id of the user to update
 * @param body A record representing a patch user request.

 *
 * @returns On success UserSuccessResponse, otherwise ErrorResponse 
 */
  updateUser(
    id: number,
    body: PatchUserRequest,
  ): Promise<UserSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/user/{id}";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<UserSuccessResponse | ErrorResponse>(
      path,
      "PATCH",
      body,
      queryString,
    );
  }

  /**
 * Deletes a user by id.
 *
 * @param id The id of the user to delete

 *
 * @returns On success UserSuccessResponse, otherwise ErrorResponse 
 */
  deleteUser(id: number): Promise<UserSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/user/{id}";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<UserSuccessResponse | ErrorResponse>(
      path,
      "DELETE",
      null,
      queryString,
    );
  }

  /**
 * Gets the request quota of a user by id.
 *
 * @param id The id of the user

 *
 * @returns On success Int32SuccessResponse, otherwise ErrorResponse 
 */
  getUserQuota(id: number): Promise<Int32SuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/user/{id}/quota";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<Int32SuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Gets the usage of a user by id.
 *
 * @param id The id of the user

 *
 * @returns On success QuotaListSuccessResponse, otherwise ErrorResponse 
 */
  getUserUsage(id: number): Promise<QuotaListSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/user/{id}/usage";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<QuotaListSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 *Gets the variables of a user by id.
*
*All the variables are returned with their values stripped (set to null).
 *
 * @param id The id of the user to get the variables for

 *
 * @returns On success VariableListSuccessResponse, otherwise ErrorResponse 
 */
  getUserVariables(
    id: number,
  ): Promise<VariableListSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [
      {
        name: "id",
        value: id,
      },
    ];

    let path = "/api/user/{id}/variables";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<VariableListSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Logout the currently authenticated user.
 *

 *
 * @returns On success UserSuccessResponse, otherwise ErrorResponse 
 */
  logout(): Promise<UserSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/auth/logout";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<UserSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Get the api key of the currently authenticated user.
 *

 *
 * @returns On success StringSuccessResponse, otherwise ErrorResponse 
 */
  getApiKey(): Promise<StringSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/auth/key";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<StringSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Generates a new API key for the authenticated user.
 *

 *
 * @returns On success StringSuccessResponse, otherwise ErrorResponse 
 */
  getNewApiKey(): Promise<StringSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/api/auth/new-key";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<StringSuccessResponse | ErrorResponse>(
      path,
      "GET",
      null,
      queryString,
    );
  }

  /**
 * Gets a checkout link for the given stripe product
 *
 * @param body A request to get a checkout link for a stripe product

 *
 * @returns On success StringSuccessResponse, otherwise ErrorResponse 
 */
  getStripeCheckoutLink(
    body: CheckoutLinkRequest,
  ): Promise<StringSuccessResponse | ErrorResponse> {
    const queryParams: { name: string; value: any }[] = [];

    if (false) {
      queryParams.push({
        name: "apiKey",
        value: this.apiKey,
      });
    }

    const queryString = queryParams
      .filter((query) => query.value !== undefined && query.value !== null)
      .map((query) => `${query.name}=${query.value}`)
      .join("&");

    const urlParams: { name: string; value: any }[] = [];

    let path = "/stripe/checkout";
    for (const param of urlParams) {
      path = path.replace(`{${param.name}}`, param.value?.toString() ?? "");
    }

    return this.request<StringSuccessResponse | ErrorResponse>(
      path,
      "POST",
      body,
      queryString,
    );
  }
}
