export default class UserEntity{
    constructor(
        readonly userId: number,
        readonly name: string | null,
        readonly email: string,
        readonly pictureUrl: string | null,
        readonly password: string,
        readonly createdAt: Date,
        readonly updatedAt: Date
    ){}

        static create(email: string, password: string): UserEntity{
            return new UserEntity(
                0,
                null,
                email,
                null,
                password,
                new Date(),
                new Date()
            );
        }
    
}