import express from 'express';
import fs from "fs";
import bodyParser from 'body-parser';
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors());

const readData = () => {
    try{
        const data = fs.readFileSync("./db.json", "utf-8");
        return(JSON.parse(data));
    } catch(error){
        console.log(error);
    }
};

const writeData = (data)=>{
    try{
        fs.writeFileSync("./db.json", JSON.stringify(data));
    } catch(error){
        console.log(error);
    }
}

app.get("/",(req, res)=>{
    res.send("Mi primera API con node JS!");
});



app.get("/usuarios", (req,res)=>{
    const data= readData();
    res.json(data.usuarios);
});

app.get("/usuarios/:id",(req,res)=>{
    const data= readData();
    const id = parseInt(req.params.id);
    const user = data.usuarios.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }    
    res.json(user);
    
});

app.post("/usuarios", (req,res)=>{
    const data=readData();
    const body = req.body;
    const newUser = {
        id: data.usuarios.length + 1,
        ...body,
    };
    data.usuarios.push(newUser);
    writeData(data);
    res.json(newUser);
});

app.put("/usuarios/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const userIndex = data.usuarios.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    data.usuarios[userIndex] = {
        ...data.usuarios[userIndex],
        ...body,
    };
    writeData(data);
    res.json({ message: "Usuario actualizado correctamente" });
});


app.delete("/usuarios/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const userIndex = data.usuarios.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    data.usuarios.splice(userIndex, 1);
    writeData(data);
    res.json({ message: "Usuario eliminado" });
});

app.listen(3000, ()=>{
    console.log("El servidor se esta ejecutando en el puerto 3000")
});

