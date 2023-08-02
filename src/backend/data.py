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
    return df['Country'].to_list()


def get_table_data(year: int, sort_by: str, columns: list[str], ascending: bool = False):
    df = read_data()
    yearly_df = df[df["Year"] == year]
    sorted_df = yearly_df.sort_values(
        by = sort_by, 
        ascending = ascending
    )
    table_data = sorted_df[columns].to_dict(orient = 'list')
    
    return table_data

def happiness_table(year: int, limit: int, ascending: bool = False) -> go.Figure:
    df = read_data()
    yearly_df = df[df["Year"] == year]
    limited_df = yearly_df.sort_values(
        by = 'happiness_score', 
        ascending = ascending
    )[0:limit]
    
    fig = go.Figure(
        data = [
            go.Table(
                header = dict(
                    values = ['Country', 'happiness_score'], 
                    fill_color = "pink"
                ),
                cells = dict(
                    values = [limited_df['Country'], limited_df['happiness_score']],  
                    fill_color = 'lightgoldenrodyellow'
                )
            )
        ]
    )
    
    fig.update_layout(title = f"Happiness Table {year}")
    
    return fig