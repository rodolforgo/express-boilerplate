import { Request, Response } from 'express';
import { CustomError } from '../../services/errors/CustomError';
import { CreateUserUseCase } from './createUserUseCase';

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        const { name, password } = req.body;
        try {
            const response = this.createUserUseCase.execute({ name, password });
            res.status(201).send(response);
        } catch (err) {
            if (err instanceof CustomError) {
                res.status(err.code).send({ message: err.message });
            }
        }
    }
}