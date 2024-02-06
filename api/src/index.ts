import LoadEnv from "@infra/helper/loadEnv";
import UserEntity from "@domain/entity/UserEntity";

console.log(process.env.NODE_ENV);

LoadEnv.load();

