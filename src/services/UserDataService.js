class UserDataService {

    getUsers() {

        return [

            {
                id:1,
                firstName:"John",
                email:"john@gmail.com",
                mobile:"9999999999",
                status:"Active"
            },

            {
                id:2,
                firstName:"David",
                email:"david@gmail.com",
                mobile:"8888888888",
                status:"Active"
            },

            {
                id:3,
                firstName:"Alex",
                email:"alex@gmail.com",
                mobile:"7777777777",
                status:"Inactive"
            }

        ];

    }

}

export default new UserDataService();