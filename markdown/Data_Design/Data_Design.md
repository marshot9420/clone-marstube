# 데이터 설계

## Comment

```json
{
  "_id": "ObjectId",
  "text": "String",
  "owner": "ObjectId (User)",
  "video": "ObjectId (Video)",
  "createdAt": "Date"
}
```

## User

```json
{
  "_id": "ObjectId",
  "email": "String",
  "avatarUrl": "String",
  "socialOnly": "Boolean",
  "username": "String",
  "password": "String",
  "name": "String",
  "location": "String",
  "comments": ["ObjectId (Comment)"],
  "videos": ["ObjectId (Video)"]
}
```

## Video

```json
{
  "_id": "ObjectId",
  "title": "String",
  "fileUrl": "String",
  "thumbUrl": "String",
  "description": "String",
  "hashtags": ["String"],
  "createdAt": "Date",
  "meta": {
    "views": "Number",
    "likes": "Number"
  },
  "comments": ["ObjectId (Comment)"],
  "owner": "ObjectId (User)"
}
```
