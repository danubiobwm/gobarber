import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// rota de Providers
routes.get('/providers', ProviderController.index);

// Rota de Appointments
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

// Rota de Schedule list from Provider
routes.get('/schedule', ScheduleController.index);
// Lista Notification
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

// rota de Uploads
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
