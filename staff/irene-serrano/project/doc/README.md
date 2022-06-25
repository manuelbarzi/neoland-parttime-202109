# ![](images/tindev-logo.png) TINDEV


## INTRO
   
   Tindev is a simple app that connects low experienced developers with companies. No matter age, phisical appearance, gender... all people are valid no matter what, the only thing that matters is the desire to move on.

![](https://thumbs.gfycat.com/HardImpoliteHummingbird-size_restricted.gif)



## FUNCTIONAL DESCRIPTION

Every user that lands on this app, can navigate between the legal advice, about page and a contact form, that sends a message to the admin e-mail.

After registering, depending on your role, you can:
####  Developer (role 1):
- Update name, description, stack, link and location.
- Deactivate profile
- See all public offers
- See an offer in detail
- Apply to a specific offer
- See a company profile
- See other offers from a specific company

#### Company (role 2):
- Update name, description, link and location.
- Deactivate profile
- Create an offer
- Deactivate/activate and offer
- Edit title, description, stack, salary and location
- Delete offer (irreversible)
- See candidates that applied to an offer
- See specific candidate profile
- Contact candidate from an offer request
- Reject candidate
- See all developers
- Contact candidate from developer profile



### Use cases
![](images/useCases.jpg)

### Wireframes
the first sketches of the application's interface

##### General
![](images/wireframes/Landing.jpg)
![](images/wireframes/LOGIN.jpg)

##### Developer
![](images/wireframes/REGISTER_DEV.jpg)
![](images/wireframes/HOME_DEV.jpg)
![](images/wireframes/OFFER-DETAIL_DEV.jpg)
![](images/wireframes/COMPANY-DETAIL_DEV.jpg)

##### Company
![](images/wireframes/REGISTER_COMPANY.jpg)
![](images/wireframes/HOME_COMPANY.jpg)
![](images/wireframes/CREATE-OFFER_COMPANY.jpg)
![](images/wireframes/MANAGE-OFFER_COMPANY.jpg)
![](images/wireframes/EDIT-PROFILE_COMPANY.jpg)

---

## TECHNICAL DESCRIPTION

### Blocks
![](images/technicalBlocks.jpg)

#### Techonologies used

> ## React ![](https://reactjs.org/favicon.ico) 

> ## Node ![](https://nodejs.org/static/images/favicons/favicon.ico)

> ## Express ![](https://expressjs.com/images/favicon.png)

> ## JWT ![](https://jwt.io/img/favicon/apple-icon-60x60.png)

> ## NodeMailer ![](https://nodemailer.com/favicon-32x32.png)

> ## Mongoose ![](https://mongoosejs.com/docs/images/favicon/apple-icon-60x60.png)

> ## Mongo ![](https://www.mongodb.com/favicon.ico)



### Data model

![](images/entityRelation.jpg)

    user {
        id: ObjectID,
        role: number (required),
        email: string (required), 
        password: string (required),
        name: string (required),
        description: string (required),
        stack: string,
        location: string,
        links: string,
        active: boolean (required),
    }

    offer {
        id: ObjectID,
        company: Objetc ID (required),
        title: string (required),
        description: string (required),
        stack: string (required),
        minSalary: number (required),
        maxSalary: number (required),
        publicationDate: string (required),
        location:  string (required),
        requests:[Request]
        active: boolean (required),
    }

    request {
        id: ObjectID,
        developer: ObjectID (required),
        seen: boolean (required),
        contacted: boolean (required),
        rejected: boolean (required),
    }

---

## TO-DO LIST
- Update user email and password
- Checkbox for remote job option
- Filter developers and offers
- Test server side logics
