import express from "express"
import { create as createHandlebarsEngine } from "express-handlebars";

//Khởi tạo app Express
const app = express();

const handlebarsEngine = createHandlebarsEngine({
    defaultLayout:"main",
    layoutsDir:"views/layouts",
    partialsDir:"views/partials",
}); 

app.engine('handlebars', handlebarsEngine.engine);
app.set('view engine', 'handlebars');
app.set('views', 'views/pages');

//Cấu hình static files
app.use(express.static("public"));

//Trang chủ
app.get("/" , (req , res) => {
    res.render("homepage");
})

//Trang blog
app.get("/blog" , (req , res) =>{
    res.render("blog");
});

//Trang about
app.get("/about" , (req ,res) =>{
    res.render("about" , {
        name : "Nguyen",
        title : "some text",
        user:{
            id : 1,
            name : "Nam Nguyen",
        },
        values :[ {
            title :"CONSECTETUR",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum quibusdam consectetur commodi.",
        },
        {
            title :"ADIPISICING",
            description : "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas quae exercitationem laboriosam.",
        },
        {
            title :"",
            description : "",
        },
        {
            title :"",
            description : "",
        }]
    });
});

//Trang servives
app.get("/services" , (req ,res) =>{
    res.render("services");
});

//Trang single
app.get("/single" , (req ,res) =>{
    res.render("single");
});

//Chạy qua Express
app.listen(3000 , () =>{
    console.log("App is running on port 3000");
});