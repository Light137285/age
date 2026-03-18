from flask import Flask, request

app = Flask(__name__)

@app.route('/index', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Data from form
        user_text = request.form.get("user_text")

        if not user_text:
            return "Please enter your age!"

        # if the input is not a number, return an error message
        if not user_text.isdigit():
            return "Please enter a valid number!"

        age = int(user_text) # Transform string to integer

        # So sánh tuổi
        if age < 18 and age > 1:
            return "Bri co nguoi yeu chua?"
        elif age > 18:
            return "Nah too old"
        elif age == 36:
             return "Rau ma"
        elif age == 67:
            return "sau bay???"
        elif age == 1:
            return "the shape of the number \"1\" looks like my dick"
        else:
            return "Do you live in Jurassic Park?"

    # If the method is GET, return the form
    return '''
    <h1>Bạn bao nhiêu tuổi?</h1>
    <form method="post">
        <input type="text" name="user_text" placeholder="Nhập tuổi của bạn...">
        <button type="submit">Submit</button>
    </form>
    '''

if __name__ == "__main__":
    app.run(debug=True)
