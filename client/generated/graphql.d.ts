export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Long: any,
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};


export type Mutation = {
   __typename?: 'Mutation',
  createUser: User,
  deleteManyUsers: BatchPayload,
  deleteUser?: Maybe<User>,
  updateManyUsers: BatchPayload,
  updateUser?: Maybe<User>,
  upsertUser: User,
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput,
  update: UserUpdateInput,
  where: UserWhereUniqueInput
};

export type PageInfo = {
   __typename?: 'PageInfo',
  endCursor?: Maybe<Scalars['String']>,
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  user?: Maybe<User>,
  users: Array<User>,
  usersConnection: UserConnection,
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserWhereInput>
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  where?: Maybe<UserWhereInput>
};

export type User = {
   __typename?: 'User',
  age?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type UserConnection = {
   __typename?: 'UserConnection',
  aggregate: AggregateUser,
  edges: Array<UserEdge>,
  pageInfo: PageInfo,
};

export type UserCreateInput = {
  age?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type UserEdge = {
   __typename?: 'UserEdge',
  cursor: Scalars['String'],
  node: User,
};

export enum UserOrderByInput {
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateInput = {
  age?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type UserUpdateManyMutationInput = {
  age?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
};

export type UserWhereInput = {
  age?: Maybe<Scalars['Int']>,
  age_gt?: Maybe<Scalars['Int']>,
  age_gte?: Maybe<Scalars['Int']>,
  age_in?: Maybe<Array<Scalars['Int']>>,
  age_lt?: Maybe<Scalars['Int']>,
  age_lte?: Maybe<Scalars['Int']>,
  age_not?: Maybe<Scalars['Int']>,
  age_not_in?: Maybe<Array<Scalars['Int']>>,
  AND?: Maybe<Array<UserWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  NOT?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};



import gql from 'graphql-tag';


      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    