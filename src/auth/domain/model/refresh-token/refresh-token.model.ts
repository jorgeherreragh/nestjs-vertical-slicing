import { RefreshTokenType } from "src/auth/types/auth.types";
import { ObjectId } from "typeorm";

export class RefreshTokenModel {
    userId!: ObjectId;
    token!: string;
  
    constructor(refreshToken: RefreshTokenType) {
      Object.assign(this, refreshToken);
    }
  
    static get prefix(): string {
      return 'refresh-token/';
    }
  }