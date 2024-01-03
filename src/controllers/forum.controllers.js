import Forum from "../models/forum.models.js";

export const getAllForums = async (req, res) => {
    try {
        const forums = await Forum.find();
        return res.status(200).json(forums);
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor" });
    }
    };

export const getForum = async (req, res) => {
    const { id } = req.params;
    try {
        const forum = await Forum.findById(id);
        if (!forum) {
            return res.status(404).json({ message: "foro no encontrado" });
        }
        return res.status(200).json(forum);
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor" });
    }
    };

export const postForum = async (req, res) => {
    let body = req.body;

    try {
        const forum = new Forum(body);
        const newForum = await forum.save();

        return res.status(201).json(newForum);
    } catch (error) {
        return res.json(error.message);
    }
    };


 // Agregar un comentario a un foro
 export const putForumC = async (req, res) => {
    const { id } = req.params;
    const { comments } = req.body;
  
    try {
      const forum = await Forum.findById(id);
      if (!forum) {
        return res.status(404).json({ message: "Foro no encontrado" });
      }
  
      // Crear un nuevo comentario con el contenido, usuario y fecha
      const newComment = {
        content: comments[0].content,
        user: comments[0].userid,
        date: comments[0].date,
      };
  
      // Agregar el nuevo comentario al arreglo de comentarios
      forum.comments.push(newComment);
  
      // Guardar la actualización del foro
      const forumUpdated = await forum.save();
  
      return res.status(200).json(forumUpdated);
    } catch (error) {
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };
  