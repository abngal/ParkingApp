# Zip Park : Parking Transactions

- How to run:
    - cd zippark && npm install && npm start 
    - wait for auto open on browser for localhost:3000 for the web ui for testing

- Technologies Used
    - Typescript
        - Framework: Wundergraph Backend-For-Frontend Graphql/REST
        - Libraries used:
            - Notable:
                - [Temporal](https://github.com/tc39/proposal-temporal) lib to manage date+time 
            - Supplemental:
                - NextJs + React Query for a quick frontend mainly or manual testing 
                - Prisma ( no need to run prisma migration, because schema and sample data alsready exists in the live database)

# Zippark Parking APIs
- Parking Start
    - curl http://localhost:9991/operations/parking/mutations/StartParking?wg_api_hash=1fa113c3'  --data-raw '{"vehicleCode":"2W","entranceCode":"ENT01"}'
- Parking Exit
    - curl http://localhost:9991/operations/parking/mutations/FinishParking?wg_api_hash=1fa113c3'  --data-raw '{"parkingTransactionId":"2"}
    
# Database
    - live DATABASE_URL=postgresql://postgres:cXW6QReJqayzXR8@db.cohgsnixxmysypamfjnd.supabase.co:5432/postgres
![Alt text](ERD_parkingtransactions.png)
[Prisma Schema for additional reference](zippark/prisma/schema.prisma)


# Bonuses (not implemented):
    - Deployment to AWS
        - was not able to because of CORs error I was not able to have it working
    - Gcash/Magpie integration
        - was not able to have time

# Tests
- cd zippark && npm test