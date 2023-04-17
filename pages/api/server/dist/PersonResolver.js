var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import 'reflect-metadata';
import { Resolver, Arg, FieldResolver } from 'type-graphql';
import { Person } from './Person';
let PersonResolver = class PersonResolver {
    // @Query(() => String)
    // async getPersonFullName(
    //   @Arg('fName') firstName: number,
    //   @Arg('lName') lastName: number
    // ): Promise<String | undefined> {
    //   return firstName + ' ' + lastName;
    // }
    fullName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
};
__decorate([
    FieldResolver(),
    __param(0, Arg('fName')),
    __param(1, Arg('lName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PersonResolver.prototype, "fullName", null);
PersonResolver = __decorate([
    Resolver(() => Person)
], PersonResolver);
export { PersonResolver };
