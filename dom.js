*{
    background-color: black;
    color: white;
  }
  
  h1 {
    text-align: center;
    margin-top: 50px;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .form-group label {
    margin-right: 10px;
  }
  
  .form-group input,
  .form-group select,
  .form-group button {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  
  .form-group button {
    background-color: WHITE;
    color: black;
    border: none;
  }
  
  .form-group button:hover {
    background-color: white;
  }
  
  
  #user-list {
    margin-top: 1rem;
    color: white;
    background-color: black;
    padding: 1rem;
  }
  
  #user-list > h2 {
    margin-bottom: 1rem;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="number"] {
    padding: 5px;
    border-radius: 5px;
    border: none;
    margin-bottom: 5px;
  }
  
  select {
    padding: 5px;
    border-radius: 5px;
    border: none;
    margin-bottom: 5px;
  }
  
  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #ccc;
  }

  #user-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #user-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .user-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .user-card .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .user-card .user-info h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .user-card .user-info p {
    margin: 0;
    font-size: 16px;
  }
  
  .user-card .user-info span {
    font-weight: bold;
  }