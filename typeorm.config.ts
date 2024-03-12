import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export const TypeORMConfig: TypeOrmModuleOptions = {
    name: 'default',
    type: 'mongodb',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    useNewUrlParser: true,
    autoLoadEntities: true,
    useUnifiedTopology: true,
    entities: [join(__dirname, '**/**.model{.ts,.js}')],

  };