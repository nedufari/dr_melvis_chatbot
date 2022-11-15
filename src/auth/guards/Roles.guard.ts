import { CanActivate, ExecutionContext, Injectable, Type } from "@nestjs/common";
import { ContextIdFactory, Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import Role from "../../enum.roles";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector:Reflector){}

    canActivate(context: ExecutionContext): boolean  {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles',[context.getHandler(),context.getClass()])
        if (!requiredRoles){
            return true
        }

        const request= context.switchToHttp().getRequest()
        const user =request.user
        

        
    
    }
}


