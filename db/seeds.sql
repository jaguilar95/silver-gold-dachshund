INSERT INTO departments (name)
VALUES
    ("Sales"), -- department 1
    ("Human Resources"), -- department 2
    ("Accounting"), -- department 3
    ("Warehouse"), -- department 4
    ("Management"), -- department 5
    ("Internship"); -- department 6

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Sales Person - Asc", 50000, 1), -- role 1
    ("Sales Person - Sr", 60000, 1), -- role 2
    ("Sales Person - Lead", 70000, 1), -- role 3
    ("Employee Relations", 50000, 2), -- role 4
    ("Recruiter", 45000, 2),  -- role 5
    ("Trainer", 45000, 2),  -- role 6
    ("Accountant - Asc", 40000, 3),  -- role 7
    ("Accountant - Sr", 45000, 3),  -- role 8
    ("Accountant - Lead", 50000, 3),  -- role 9
    ("Warehouse Picker", 30000, 4),  -- role 10
    ("Warehouse Picker - Lead", 40000, 4),  -- role 11
    ("Manager", 80000, 5),-- role 12
    ("Intern Supervisor", 40000, 6),  -- role 13
    ("Intern", 25000, 6); -- role 14

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Jonathan", "Joestar", 12, NULL), -- employee 1
    ("Will", "Zeppeli", 6, 1), -- employee 2
    ("Robert", "Speedwagon", 5, 1), -- employee 3
    ("Dio", "Brando", 5, 1), -- employee 4
    ("Joseph", "Joestar", 3, 1), -- employee 5
    ("Ceasar", "Zeppeli", 2, 5), -- employee 6
    ("Lisa", "Lisa", 2, 5), -- employee 7
    ("Rudol", "Von Stroheim", 1, 5), -- employee 8
    ("Smokey", "Brown", 1, 5), -- employee 9
    ("Suzi", "Q", 1, 5), -- employee 10
    ("Jotaro", "Kujo", 9, 1), -- employee 11
    ("Muhammad", "Avdol", 8, 11), -- employee 12
    ("Noriaki", "Kakyoin", 8, 11), -- employee 13
    ("Jean Pierre", "Polnareff", 7, 11), -- employee 14
    ("Iggy", "Dog", 7, 11), -- employee 15
    ("Bruno", "Bucciarati", 11, 1), -- employee 16
    ("Giorno", "Giovanna", 10, 16), -- employee 17
    ("Leone", "Abbacchio", 10, 16), -- employee 18
    ("Guido", "Mista", 10, 16), -- employee 19
    ("Narancia", "Ghirga", 10, 16), -- employee 20
    ("Pannacotta", "Fugo", 10, 16), -- employee 21
    ("Trish", "Una", 10, 16), -- employee 22
    ("Rohan", "Kishibe", 13, 1), -- employee 23
    ("Higashikata", "Josuke", 14, 23), -- employee 24
    ("Koichi", "Hirose", 14, 23), -- employee 25
    ("Okuyasu", "Nijimura", 14, 23); -- employee 26