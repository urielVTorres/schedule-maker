import pandas as pd
df = pd.read_csv (r'C:\Users\chopa\desktop\code\schedule\schedule-maker\python\Horarios.csv')
df.to_json (r'C:\Users\chopa\desktop\code\schedule\schedule-maker\python\Horario.json')