import pandas as pd
df = pd.read_csv (r'C:\Users\SibylSystem\Desktop\Code\Schedule\python\Horarios.csv')
df.to_json (r'C:\Users\SibylSystem\Desktop\Code\Schedule\python\Horario.json')