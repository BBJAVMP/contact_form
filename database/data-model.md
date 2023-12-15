<https://www.mermaidchart.com/app/projects/dbfbaab4-dc64-48da-bf0f-84863989127c/diagrams/ffa3fb73-c8e0-4ed2-8c1a-bdb0779ac490/version/v0.1/edit>


---

title: Blog
---

classDiagram
users  <|-- blogs
note for blogs "The pictures is a directory in serveur"

   class users{
    +int id_user (unique)*
    +String first_name
    +String last_name
    +String email
    +Boolean admin
    +Datetime date_create
   }

   class blogs{
    +int id_blog(unique)*
    +int id_user
    +String title
    +Text text_content_blog
    +String picture
    +Datetime date_create
   }

