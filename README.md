![logo](/img/wealthHealth.png)



# SERVER-P14-HRNET
Server for the project `https://github.com/Christelle74/PhilippeChristelle_P14_HRNet`


## Made with :
- [MONGODB (**version 4.23.5**)](https://www.mongodb.com/fr-fr)
- [EXPRESS (**version 4.18.2**)](https://expressjs.com/fr/)
- [MONGOOSE (**version 6.7.2**)](https://mongoosejs.com/)



## How to install ?


**1- BackEnd :**
  - Forke and clone the repository : `https://github.com/Christelle74/Server_P14_HRnet`
  - Run the `npm install` command will allow you to install the dependencies
  

  - Log in or create a mongoDb Atlas account:`https://www.mongodb.com/fr-fr`
  - Create a free database cluster.
  - Add `.env` file in the root of the projet et put inside 
    - ` PORT=5000`
    - ` MONGODB_URI=mongodb+srv://<YourName>:<yourPassword>@cluster0.mongodb.net/<NameOfTheServer>?retryWrites=true&w=majority` (your mongoDB URI)
  

  - Finally lauch the server with `npm start`,
  - This command will allow you to see datas on http://localhost:5000/employees


  - If you have these messages in your console, that's done !!! :
    - Listening on port 5000
    - Connected to MongoDB


**2- FrontEnd :**
  - Forke and clone the repository : `https://github.com/Christelle74/PhilippeChristelle_P14_HRNet`
  - Open a new terminal
  - Run `cd hrnet` 
  - Then run the `npm install` + `npm start`command that will allow you to run the application on http://localhost:3000

## Author

Christelle Philippe

---



