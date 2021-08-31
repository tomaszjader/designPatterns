class Singleton {
    private static instance: Singleton;
    private constructor() { }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance;
    }
    public someBusinessLogic() {
        console.log("Some business logic");
    }
}
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log("Singleton works.");
    } else {
        console.log("error");
    }
}
clientCode();