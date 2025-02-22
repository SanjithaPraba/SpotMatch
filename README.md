For Devs:
## Creating a New Branch
Before creating a new branch, ensure your local `main` branch is up to date:
```bash
git checkout main
git pull origin main  # Ensure your local main is up to date
git checkout -b <ticketNumber-new-branch-name>  # Create and switch to a new branch
```

# Project Setup Instructions

## Prerequisites
Ensure you have the following installed on your system:
- Python 3.8 or later
- Git

## Setting Up the Virtual Environment
To standardize the development process, we use a virtual environment. Follow these steps to set it up:

### **1. Clone the Repository**
```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### **2. Run the Setup Script**
For macOS/Linux:
```bash
chmod +x setup.sh
./setup.sh
```
For Windows (Command Prompt or PowerShell):
```bat
setup.bat
```
This will:
- Create a virtual environment named `venv`
- Install required dependencies from `requirements.txt`

### **3. Activate the Virtual Environment**
#### macOS/Linux:
```bash
source venv/bin/activate
```
#### Windows (Command Prompt):
```bat
venv\Scripts\activate
```
#### Windows (PowerShell):
```powershell
.\venv\Scripts\Activate
```

### **4. Verify Installation**
Run the following to check if all necessary packages are installed:
```bash
python -c "import libraryName1; import libraryName2; import libraryName3; print('All imports work')"
```
If no errors appear, the setup is complete.

## Adding New Dependencies
If your branch requires a new package:
```bash
pip install <package-name>
pip freeze > temp_requirements.txt
#combine and filter duplicates
cat temp_requirements.txt requirements.txt | sort -u > combined_requirements.txt
mv combined_requirements.txt requirements.txt
rm temp_requirements.txt

git add requirements.txt
git commit -m "Added new dependency: <package-name>"
git push origin <your-branch>
```
