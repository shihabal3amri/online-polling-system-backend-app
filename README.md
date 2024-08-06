# Online Polling System Backend App Readme

This backend application is built using **NestJS**, **Prisma**, and **GraphQL**, providing a robust solution for online polling and voting. Key features include:

- **User Management:** Support for user registration and authentication, allowing users to create accounts and securely log in.
- **Poll Management:** Users can create new polls, specify options, and manage poll settings.
- **Voting System:** Users can cast votes for poll options and update their votes if permitted by the poll settings.
- **Real-Time Updates:** Poll results are delivered in real-time through GraphQL subscriptions, ensuring users receive the latest data without refreshing.

The app leverages NestJS for its modular architecture and robust backend capabilities, Prisma for seamless database interactions, and GraphQL for flexible and efficient data querying and real-time subscriptions.

## Mutations

### 1. Signup New User
- **Mutation:** signup
- **Operation:**
    ```gql
    mutation Signup($createUserDto: CreateUserDto!) {
      signup(createUserDto: $createUserDto) {
        id
        username
        email
      }
    }
    ```
- **Variables:**
    ```json
    {
      "createUserDto": {
        "email": "test@test.com",
        "password": "test1234",
        "username": "test94"
      }
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "signup": {
          "id": "<userId>",
          "username": "test94",
          "email": "test@test.com"
        }
      }
    }
    ```

### 2. Login
- **Mutation:** login
- **Operation:**
    ```gql
    mutation Login($loginUserDto: LoginUserDto!) {
      login(loginUserDto: $loginUserDto) {
        accessToken
        refreshToken
      }
    }
    ```
- **Variables:**
    ```json
    {
      "loginUserDto": {
        "password": "test1234",
        "username": "test94"
      }
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "login": {
          "accessToken": "<accessToken>",
          "refreshToken": "<refreshToken>"
        }
      }
    }
    ```

### 3. Refresh Token
- **Mutation:** refresh
- **Operation:**
    ```gql
    mutation Mutation($refreshToken: String!) {
      refresh(refreshToken: $refreshToken) {
        accessToken
        refreshToken
      }
    }
    ```
- **Variables:**
    ```json
    {
      "refreshToken": "<refreshToken>"
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "refresh": {
          "accessToken": "<accessToken>",
          "refreshToken": "<refreshToken>"
        }
      }
    }
    ```

### 4. Create New Poll
- **Mutation:** createPoll
- **Authorization:** Bearer \<accessToken\>
- **Operation:**
    ```gql
    mutation CreatePoll($createPollInput: CreatePollInput!) {
      createPoll(createPollInput: $createPollInput) {
        id
        title
        userId
        options {
          id
          pollId
          text
        }
      }
    }
    ```
- **Variables:**
    ```json
    {
      "createPollInput": {
        "isMultipleOptions": true,
        "options": [
          {
            "text": "test 1"
          },
                {
            "text": "test 2"
          }
        ],
        "title": "title 1",
        "willEndAt": "2024-08-10 11:00:00"
      }
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "createPoll": {
          "id": "<pollId>",
          "title": "title 1",
          "userId": "<userId>",
          "options": [
            {
              "id": "<optionId>",
              "pollId": "<pollId>",
              "text": "test 1"
            },
            {
              "id": "<optionId>",
              "pollId": "<pollId>",
              "text": "test 2"
            }
          ]
        }
      }
    }
    ```

### 5. End Poll
- **Mutation:** endPoll
- **Authorization:** Bearer \<accessToken\>
- **Operation:**
    ```gql
    mutation EndPoll($endPollId: String!) {
      endPoll(id: $endPollId) {
        id
        isPollEndedByUser
        willEndAt
      }
    }
    ```
- **Variables:**
    ```json
    {
      "endPollId": "<pollId>"
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "endPoll": {
          "id": "<pollId>",
          "isPollEndedByUser": true,
          "willEndAt": "2024-08-10T07:00:00.000Z"
        }
      }
    }
    ```

### 6. Create Vote
- **Mutation:** createVote
- **Authorization:** Bearer \<accessToken\>
- **Operation:**
    ```gql
    mutation Mutation($createVoteInput: CreateVoteInput!) {
      createVote(createVoteInput: $createVoteInput) {
        isVoted
        optionId
        pollId
        timestamp
        updatedAt
        userId
        id
      }
    }
    ```
- **Variables:**
    ```json
    {
      "createVoteInput": {
        "optionId": "<optionId>",
        "pollId": "<pollId>"
      }
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "createVote": {
          "isVoted": true,
          "optionId": "<optionId>",
          "pollId": "<pollId>",
          "timestamp": "2024-08-06T17:25:01.456Z",
          "updatedAt": "2024-08-06T17:25:01.456Z",
          "userId": "<userId>",
          "id": "<voteId>"
        }
      }
    }
    ```

### 7. Update Vote
- **Mutation:** updateVote
- **Authorization:** Bearer \<accessToken\>
- **Operation:**
    ```gql
    mutation UpdateVote($updateVoteInput: UpdateVoteInput!) {
      updateVote(updateVoteInput: $updateVoteInput) {
        isVoted
        id
        userId
      }
    }
    ```
- **Variables:**
    ```json
    {
      "updateVoteInput": {
        "isVoted": false,
        "voteId": "<voteId>"
      }
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "updateVote": {
          "isVoted": false,
          "id": "<voteId>",
          "userId": "<userId>"
        }
      }
    }
    ```

## Queries

### 1. Get Polls
- **Query:** getPolls
- **Authorization:** Bearer \<accessToken\>
- **Operation:**
    ```gql
    query Query($paginationInput: PaginationInput!) {
      getPolls(paginationInput: $paginationInput) {
        id
        isMultipleOptions
        isPollEndedByUser
        options {
          id
          text
          _count {
            votes
          }
          votes {
            userId
          }
        }
      }
    }
    ```
- **Variables:**
    ```json
    {
      "paginationInput": {
        "skip": 0,
        "take": 50
      }
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "getPolls": [
          {
            "id": "<pollId>",
            "isMultipleOptions": true,
            "isPollEndedByUser": false,
            "options": [
              {
                "id": "<optionId>",
                "text": "test 2",
                "_count": {
                  "votes": 1
                },
                "votes": [
                  {
                    "userId": "<userId>"
                  }
                ]
              },
              {
                "id": "<optionId>",
                "text": "test 1",
                "_count": {
                  "votes": 2
                },
                "votes": [
                  {
                    "userId": "<userId>"
                  },
                  {
                    "userId": "<userId>"
                  }
                ]
              }
            ]
          },
          {
            "id": "<pollId>",
            "isMultipleOptions": true,
            "isPollEndedByUser": false,
            "options": [
              {
                "id": "<optionId>",
                "text": "test 2",
                "_count": {
                  "votes": 0
                },
                "votes": []
              },
              {
                "id": "<optionId>",
                "text": "test 1",
                "_count": {
                  "votes": 0
                },
                "votes": []
              }
            ]
          }
        ]
      }
    }
    ```

### 2. Get Poll
- **Query:** getPoll
- **Authorization:** Bearer \<accessToken\>
- **Operation:**
    ```gql
    query GetPoll($getPollId: String!) {
      getPoll(id: $getPollId) {
        id
        isMultipleOptions
        isPollEndedByUser
        options {
          _count {
            votes
          }
          id
          text
          votes {
            userId
          }
        }
      }
    }
    ```
- **Variables:**
    ```json
    {
      "getPollId": "<pollId>"
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "getPoll": {
          "id": "<pollId>",
          "isMultipleOptions": true,
          "isPollEndedByUser": false,
          "options": [
            {
              "_count": {
                "votes": 1
              },
              "id": "<optionId>",
              "text": "test 2",
              "votes": [
                {
                  "userId": "<userId>"
                }
              ]
            },
            {
              "_count": {
                "votes": 2
              },
              "id": "<optionId>",
              "text": "test 1",
              "votes": [
                {
                  "userId": "<userId>"
                },
                {
                  "userId": "<userId>"
                }
              ]
            }
          ]
        }
      }
    }
    ```

## Subscriptions

### 1. Poll Updated

- **Subscription:** pollUpdated
- **Authorization:** Bearer \<accessToken\>
- **Operation:**
    ```gql
    subscription Subscription($pollIds: [String!]!) {
      pollUpdated(pollIds: $pollIds) {
        id
        options {
          _count {
            votes
          }
          votes {
            userId
          }
          text
        }
        isMultipleOptions
        isPollEndedByUser
        title
      }
    }
    ```
- **Variables:**
    ```json
    {
      "pollIds": ["<pollId>"]
    }
    ```
- **Response:**
    ```json
    {
      "data": {
        "pollUpdated": {
          "id": "<pollId>",
          "options": [
            {
              "_count": {
                "votes": 1
              },
              "votes": [
                {
                  "userId": "<userId>"
                }
              ],
              "text": "test 1"
            },
            {
              "_count": {
                "votes": 0
              },
              "votes": [],
              "text": "test 2"
            }
          ],
          "isMultipleOptions": true,
          "isPollEndedByUser": false,
          "title": "title 1"
        }
      }
    }
    ```

**Note:** The examples provided showcase only a subset of the available fields. To explore all fields and fully understand the schema, follow these steps:

1. **Run the application. (Check the steps below)**
2. **Access Apollo Studio**: Visit [Apollo Studio Explorer](https://studio.apollographql.com/sandbox/explorer).
3. **Set the endpoint**: Configure the endpoint to `http://localhost:3000/graphql`.
4. **Explore the schema**: You can now view and interact with all fields in each mutation, query, and subscription within the Explorer.

This will give you a comprehensive view of the entire GraphQL schema and its capabilities.

---

## Requirements
- Node.js
- PostgreSQL

## How to Run the Project for the First Time
1. Rename `.env_` to `.env` and fill the required fields:
    ```
    DATABASE_URL="postgres://<username>:<password>@<host>:<port>/<db>"
    ACCESS_TOKEN_SECRET="some_secret_for_access_tokens"
    REFRESH_TOKEN_SECRET="different_secret_for_refresh_tokens"
    ```

2. Run `npm i` to install the packages.
3. Run `npx prisma migrate dev` to run the migration file and create the required tables in PostgreSQL.
4. Run `npm run start:dev` to start the app.

