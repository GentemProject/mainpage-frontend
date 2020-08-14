import { Request, Response } from 'express';
/* import { connectMongo } from '../../utils/database'; */

import Project from '../models/project';

const ProjectCtrl = {
  getAllProjects: async (res: Response) => {
    const projects = await Project.find();
    await res.json(projects);
  },
  createProject: async (req: Request, res: Response) => {
    console.log(req.body);
    const { name, description, objective } = req.body;

    const newProject = new Project({
      primaryData: {
        name,
        description,
        objective,
      },
    });
    await newProject.save();
    res.json({ message: 'Saved' });
  },
};

export default ProjectCtrl;

/* getAllOrgs: async (_req: Request, res: Response) => {
    const db = await connectMongo();
    const data = await db.collection('organizations').find({}).toArray();

    res.status(200).json({ data });
  }, */

/*   getOrg: async (req: Request, res: Response) => {
    const slug = req.params.id;

    const db = await connectMongo();
    const data = await db.collection('organizations').findOne({ slug });

    res.status(200).json({ data });
  }, */
