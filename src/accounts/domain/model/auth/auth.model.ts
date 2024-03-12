import { AccessTokenDataType, AuthenticationMethodType, TokenType } from "src/accounts/types/account.types";
import { signToken } from "src/utils/helpers/jwt-signer.helper";
import { Column, Entity } from "typeorm";

@Entity()
export class Auth {
    @Column({ primary: true })
    id: string;

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
}