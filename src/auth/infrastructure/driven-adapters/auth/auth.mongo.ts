import { NotFoundException } from "@nestjs/common";
import { randomBytes } from "crypto";
import { AuthRepository } from "src/auth/domain/gateway/auth.repository";
import { AuthModel } from "src/auth/domain/model/auth/auth.model";
import { RefreshTokenModel } from "src/auth/domain/model/refresh-token/refresh-token.model";
import { AuthenticationMethodType } from "src/auth/types/auth.types";
import { DataSource, Repository } from "typeorm";

export class AuthServiceMongo implements AuthRepository {
    authRepository: Repository<AuthModel>;
    constructor(private dataSource: DataSource) {
        this.authRepository = dataSource && dataSource.getRepository(AuthModel);
    }

    async authenticate(auth: AuthModel): Promise<AuthModel> {
        try {
            console.log('auth -> ', auth);
            const user = await this.getUserByCredentials(
                auth.email,
                auth.password,
            );
        } catch (error) {
            console.error('error => ', error.message);
        }
        return auth;
    }

    async getUserByCredentials(email: string, password: string): Promise<AuthModel> {
        const hashedPassword = password;
        const user = await this.authRepository.findOne({
            where: {
                email: email,
                password: hashedPassword,
            }
        });

        console.log('user -> ', user);

        if (!user) throw new NotFoundException(`User with email ${email} not found!`);

        return user;
    }

    // async generateAuthorizationCodeForUser(
    //     user: AuthModel,
    //     authenticationMethod: AuthenticationMethodType,
    //   ): Promise<string> {
    //     const code = randomBytes(32).toString('hex');
    //     let token = '';
    //     let idToken = '';
    //     let refreshToken = '';
    //     token = user.getSignedJwtToken(authenticationMethod);
    //     idToken = user.getSignedIdToken();
    //     refreshToken = user.getSignedRefreshToken();
    //     const authCodeProps = {
    //       userId: user.id,
    //       code,
    //       token,
    //       idToken,
    //       refreshToken,
    //     };
    //     const refreshTokenProps = {
    //       userId: user.id,
    //       token: refreshToken,
    //     };
    //     const refreshTokenModel = new RefreshTokenModel(refreshTokenProps);
    //     // const authCode = new AuthCodeModel(authCodeProps);
    //     try {
    //     //   await this.invalidatePreviousCodeForUser(user.id);
    //     //   await this.redisClient.set(
    //     //     RefreshTokenModel.prefix + refreshTokenModel.userId,
    //     //     JSON.stringify(refreshTokenModel),
    //     //     'EX',
    //     //     defaults.JWT_REFRESH_TOKEN_EXPIRE_SECONDS,
    //     //   );
    //     //   await this.redisClient.set(
    //     //     AuthCodeModel.prefix + authCode.code,
    //     //     JSON.stringify(authCode),
    //     //     'EX',
    //     //     defaults.JWT_EXPIRE_SECONDS,
    //     //   );
    //     //   await this.redisClient.set(
    //     //     UserModel.prefix + user.id,
    //     //     authCode.code,
    //     //     'EX',
    //     //     defaults.JWT_EXPIRE_SECONDS,
    //     //   );
    //     } catch (error) {
    //       throw new Error(error.message);
    //     }
    //     return 'authCode.code';
    //   }
    
    //   async getAuthCodeByCode(code: string): Promise<AuthCodeModel | undefined> {
    //     try {
    //       const codeFromDb = await this.redisClient.get(
    //         AuthCodeModel.prefix + code,
    //       );
    //       if (!codeFromDb) {
    //         return undefined;
    //       }
    //       const authCodeData: AuthCodeType = JSON.parse(
    //         codeFromDb as string,
    //       ) as AuthCodeType;
    //       return new AuthCodeModel(authCodeData);
    //     } catch (error) {
    //       throw new Error(error.message);
    //     }
    //   }
}