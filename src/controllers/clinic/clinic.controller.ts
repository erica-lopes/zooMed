import { Request, Response } from "express";
import clinicCreateService from "../../services/clinic/clinicCreate.service";
import clinicDeleteService from "../../services/clinic/clinicDelete.service";
import clinicListService from "../../services/clinic/clinicList.service";
import clinicUpdateService from "../../services/clinic/clinicUpdate.service";

const clinicCreateController = async (req: Request, res: Response) => {
    const { name, contact, crmv_pj, address } = req.body;
    const createdClinic = await clinicCreateService({
      name,
      contact,
      crmv_pj,
      address,
    });
    return res.status(201).send(createdClinic);
};

const clinicDeleteController = async (req: Request, res: Response) => {
    const { id } = req.params;
    await clinicDeleteService(id);
    return res.status(203).send();
};

const clinicListController = async (req: Request, res: Response) => {
    const listed = await clinicListService();
    return res.status(200).send(listed);
};

const clinicUpdateController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, contact, crmv_pj, address, clinicsDoctors } = req.body;
    const clinicUpdated = await clinicUpdateService(id, {
      name,
      contact,
      crmv_pj,
      address,
      clinicsDoctors,
    });

    return res.status(200).send(clinicUpdated);
};

export {
  clinicCreateController,
  clinicDeleteController,
  clinicListController,
  clinicUpdateController,
};
