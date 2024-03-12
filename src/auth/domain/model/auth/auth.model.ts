import { AccessTokenDataType, AuthenticationMethodType, IdTokenDataType, RefreshTokenDataType, TokenType } from "src/auth/types/auth.types";
import { encode } from "src/utils/helpers/base64.helper";
import { signToken } from "src/utils/helpers/jwt-signer.helper";
import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class AuthModel {
    @ObjectIdColumn({ primary: true })
    id: ObjectId;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column()
    role: string;

    @Column()
    password: string;
    

    getSignedJwtToken(authenticationMethod: AuthenticationMethodType): string {
        const tokenData: AccessTokenDataType = {
            type: TokenType.USER,
            id: this.id,
            role: this.getUserRole(),
            givenName: `${this.firstName} ${this.lastName}`,
            authenticationMethod,
            email: this.email,
        };

        const expiresIn = process.env.JWT_EXPIRE;

        return signToken(tokenData, expiresIn);
    }

    getUserRole(): string {
        return this.role;
    }

    getUserProfile(): IdTokenDataType {
        const userProfile: IdTokenDataType = {
          id: this.id,
          role: this.getUserRole(),        
          firstName: this.firstName || '',
          lastName: this.lastName || '',
          middleName: this.middleName || '',
          email: this.email || '',
        };
    
        return userProfile;
      }

    getSignedIdToken(): string {
        const tokenData: IdTokenDataType = this.getUserProfile();
        const expiresIn = process.env.JWT_EXPIRE;
        return signToken(tokenData, expiresIn);
    }

    getSignedRefreshToken(): string {
        const tokenData: RefreshTokenDataType = {
          userId: encode(this.id.toString()),
        };
        const expiresIn =
          process.env.JWT_REFRESH_TOKEN_EXPIRE;
        return signToken(tokenData, expiresIn);
    }
}