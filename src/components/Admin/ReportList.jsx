import React from 'react'
import {List, Datagrid, TextField, NumberField, EditButton, DeleteButton, useRecordContext} from 'react-admin'
import {Create,Edit, SimpleForm,TextInput,NumberInput, BooleanInput, DateInput, ReferenceInput, required} from 'react-admin'

const ReportList = (props) => {
    const handleDelete = async (id) => {
        try {
          await props.dataProvider('DELETE', 'communities/1/post/1/reports/${id}');
          props.refresh();
        } catch (error) {
          console.error(error);
        }
      };
    return <List {...props}>
    <Datagrid>
      <NumberField source='id' />
      <NumberField source='post_id' />
      <NumberField source='account_id' />
      <NumberField source='report_categories_id' />
      <TextField source='report_categories_name' />
      <NumberField source='report_reasons_id' />
      <TextField source='report_reason_name' />
      <EditButton basePath='/reports' />
      <DeleteButton basePath='/reports'  onClick={handleDelete} />
    </Datagrid>
  </List>

};

export default ReportList;