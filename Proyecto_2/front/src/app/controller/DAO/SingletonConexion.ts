
export class SingletonConexion{
    private static instance: SingletonConexion;

    private constructor(){}

    public static getInstance(): SingletonConexion {
        if (!SingletonConexion.instance) {
            SingletonConexion.instance = new SingletonConexion();
        }
        
        return SingletonConexion.instance;
    }

    public getConn(){}
    public closeConn(){}
}