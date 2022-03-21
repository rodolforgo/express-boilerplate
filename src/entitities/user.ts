export class User {
   constructor(
      private _id: string,
      private _name: string,
      private _password: string
   ) { }

   public getId(): string {
      return this._id;
   }

   public getNick(): string {
      return this._name;
   }
   
   public getPassword(): string {
      return this._password;
   }

   static toUser(data: any) {
      return new User(data.id, data.name, data.password);
   }
}