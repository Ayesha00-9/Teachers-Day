from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    current_date = datetime.now().strftime('%B %d, %Y')  # e.g., "September 07, 2025"
    return render_template('index.html', current_date=current_date)

if __name__ == '__main__':
    app.run(debug=True)