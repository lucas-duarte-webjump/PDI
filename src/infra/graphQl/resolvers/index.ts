import {Arg, Mutation, Query, Resolver} from 'type-graphql';
import { makeRegisterCustomerResolver } from '../../factories/resolvers/makeRegisterCustomerResolver';
import { CreateCustomerInput } from '../../../modules/customer/domain/input/CustomerInput';
import { CustomerModel } from '../../../modules/customer/domain/model/CustomerModel';
import { CustomerStructure } from '../../../domain/dto/Customer';
import { ProductModel } from '../../../modules/product/domain/model/ProductModel';
import { ProductInput } from '../../../modules/product/domain/input/ProductInput';
import { ProductStructure } from '../../../domain/dto/Product';
import { makeRegisterProductResolver } from '../../factories/resolvers/makeRegisterProductResolver';
import { ProductsModel } from '../../../modules/product/domain/model/ProductsModel';
import { ProductStockModel } from '../../../modules/product/domain/model/ProductStockModel';
import { ProductStockInput } from '../../../modules/product/domain/input/ProductStockInput';
import { ProductStockStructure } from '../../../domain/dto/ProductStock';
import { makeRetrieveProductsResolver } from '../../factories/resolvers/makeRetrieveProductsResolver';
import { makeRegisterProductStockResolver } from '../../factories/resolvers/makeRegisterProductStockResolver';
import { QuoteModel } from '../../../modules/quote/domain/model/QuoteModel';
import { QuoteInput } from '../../../modules/quote/domain/input/QuoteInput';
import { QuoteId, QuoteStructure } from '../../../domain/dto/Quote';
import { makeRegisterQuoteResolver } from '../../factories/resolvers/makeRegisterQuoteResolver';
import { QuoteRelation } from '../../../modules/quote/domain/model/QuoteRelation';
import { QuoteIdInput } from '../../../modules/quote/domain/input/QuoteIdInput';
import { makeRegisterQuoteById } from '../../factories/resolvers/makeRetrieveQuoteById';
import { QuoteItemModel } from '../../../modules/quote/domain/model/QuoteItemModel';
import { QuoteItemInput } from '../../../modules/quote/domain/input/QuoteItemInput';
import { QuoteItemStructure } from '../../../domain/dto/QuoteItem';
import { makeRegisterQuoteItemResolver } from '../../factories/resolvers/makeRegisterQuoteItemResolver';

@Resolver()
export class Resolvers {
    @Query(() => String)
    helloWorld() {
        return 'hello world';
    }

    @Query(() => QuoteRelation)
    async getQuoteById(
        @Arg('args', () => QuoteIdInput, {validate: false}) args: QuoteId
    ) {
        return await makeRegisterQuoteById().execute(args);
    }

    @Query(() => [ProductsModel])
    async getAllProducts() {
        return await makeRetrieveProductsResolver().execute(null);
    }

    @Mutation(() => CustomerModel)
    async registerCustomer(
        @Arg('args', () => CreateCustomerInput, {validate: false}) args: CustomerStructure
    ) {
        return await makeRegisterCustomerResolver().execute(args);
    }

    @Mutation(() => ProductModel)
    async registerProduct(
        @Arg('args', () => ProductInput, {validate: false}) args: ProductStructure
    ) {
        return await makeRegisterProductResolver().execute(args);
    }

    @Mutation(() => ProductStockModel)
    async registerProductStock(
        @Arg('args', () => ProductStockInput, {validate: false}) args: ProductStockStructure
    ) {
        return makeRegisterProductStockResolver().execute(args);
    }

    @Mutation(() => QuoteModel)
    async registerQuote(
        @Arg('args', () => QuoteInput, {validate: false}) args: QuoteStructure
    ) {
        return await makeRegisterQuoteResolver().execute(args);
    }

    @Mutation(() => QuoteItemModel)
    async registerQuoteItem(
        @Arg('args', () => QuoteItemInput, {validate: false}) args: QuoteItemStructure
    ) {
        return await makeRegisterQuoteItemResolver().execute(args);
    }
}