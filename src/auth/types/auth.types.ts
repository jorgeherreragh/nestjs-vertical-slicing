import { ObjectId } from "typeorm";

export enum AuthenticationMethodType {
    CREDENTIALS = 'credentials',
    CUSTOM_REQUEST = 'custom-request',
    REFRESH = 'token-refresh',
}

export enum TokenType {
    USER = 'user',
    SERVICE = 'service',
}  

export type AccessTokenDataType = {
    type: TokenType;
    id: ObjectId;
    role: string;
    givenName?: string;
    authenticationMethod?: AuthenticationMethodType;
    email?: string;
};

export type IdTokenDataType = {
    id: ObjectId;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    role: string;
};

export type RefreshTokenDataType = {
    userId: string;
};

export type RefreshTokenType = {
    userId: string;
    token: string;
};
  