import pandas as pd
import plotly.graph_objs as go
import plotly.express as px
import json

file_name = "WorldHappiness_Corruption_2015_2020"
file_location = "./Data/"
file_type = ".csv"

def read_data():
    return pd.read_csv( file_location + file_name + file_type)

def get_countries():
    df = read_data()
    return df['Country'].unique().tolist()


def get_table_data(year: int, sort_by: str, columns: list[str], ascending: bool = False):
    df = read_data()
    yearly_df = df[df["Year"] == year]
    sorted_df = yearly_df.sort_values(
        by = sort_by, 
        ascending = ascending
    )
    table_data = sorted_df[columns].to_dict(orient = 'list')
    
    return table_data