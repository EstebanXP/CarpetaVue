<template>
<div>
    <h1>Editar todos</h1>
        <form @submit.prevent="updateTodo">
        <p>Nombre de tarea: 
            <input type="text" v-model="name">
        
        </p>
        <p>Estatus
            <select v-model="status">
                <option value="pendiente">Pendiente</option>
                 <option value="Terminada">Terminada</option>
            </select>
        </p>
        <button type="submit">Aceptar</button>
    </form>
    <hr>
    <button @click="eliminar=!eliminar" v-if="eliminar===false" >Eliminar</button>
    <div v-if="eliminar===true">
        <h1> Seguro?</h1>
        <button @click="deleteTodo">Si, eliminar</button>
        <button @click="eliminar=false">Cancelar</button>
    </div>
</div>
</template>

<script>
    import {db} from '../firebase.js'
    import router from '../router'

    export default{
        name: "TodoEdit",
            data(){
                return{
                    name:"",
                    status:"",
                    eliminar:false,
                }
            },
            created(){
                this.getTodo();
            },
            methods: {
                async getTodo(){
                    const id=this.$route.params.id;
                    const data = await db.collection("todos").doc(id).get();
                    const todo = data.data();
                    this.name=todo.name;
                    this.status=todo.status;
                },
                async updateTodo(){
                    const id= this.$route.params.id;
                    await db.collection("todos").doc(id).set({
                        name:this.name,
                        status:this.status
                    })
                    router.push("/");
                },
                async deleteTodo(){
                    const id= this.$route.params.id;
                    await db.collection("todos").doc(id).delete()
                    router.push("/");
                }
            }
    
    
}
</script>