# Zip Park : Parking Transactions

- How to run:
    - cd zippark && npm install && npm start 

- Technologies Used
    - Typescript
        - Framework: Wundergraph Backend-For-Frontend Graphql/REST
        - Libraries used:
            - Notable:
                - NextJs + React Query for a quick frontend mainly or manual testing 
            - Supplemental:
                - Prisma

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