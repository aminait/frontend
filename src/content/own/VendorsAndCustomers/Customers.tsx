import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useTranslation } from 'react-i18next';
import Form from '../components/form';
import * as Yup from 'yup';
import { IField, TableCustomizedColumnType } from '../type';
import wait from 'src/utils/wait';
import TableCustomized from '../components/TableCustomized';
import { useState } from 'react';
import CustomDataGrid from '../components/CustomDatagrid';
import {
  GridActionsCellItem,
  GridEnrichedColDef,
  GridRowParams,
  GridToolbar
} from '@mui/x-data-grid';

interface PropsType {
  values?: any;
  openModal: boolean;
  handleCloseModal: () => void;
}

const Customers = ({ openModal, handleCloseModal }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const [isVendorDetailsOpen, setIsVendorDetailsOpen] = useState<boolean>(false);

  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const values = {
    customerName: customerName,
    phone: phone
  };
  // console.log('values customers-> ', values);

  let fields: Array<IField> = [
    {
      name: 'details',
      type: 'titleGroupField',
      label: 'Details'
    },
    {
      name: 'customerName',
      type: 'text',
      label: 'Customer Name',
      placeholder: 'Jonh Doe',
      required: true
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      placeholder: 'casa, maroc'
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      placeholder: '+00212611223344',
      required: true
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website',
      placeholder: 'https://web-site.com'
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'john.doe@gmail.com'
    },
    {
      name: 'customerType',
      type: 'text',
      label: 'Customer Type',
      placeholder: 'ex. Plumbing, Electrical'
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      multiple: true,
      placeholder: 'Describe the purpose of this customer in a few line...'
    },
    {
      name: 'rate',
      type: 'text',
      label: 'Rate',
      placeholder: 'Rate',
      icon: '$',
      helperText: 'Changes will only apply to Work Orders created in the future'
    },
    {
      name: 'details',
      type: 'titleGroupField',
      label: 'Billing Information'
    },
    {
      name: 'address1',
      type: 'text',
      label: 'Address',
      placeholder: 'casa, maroc'
    },
    {
      name: 'address2',
      type: 'text',
      label: 'Address Line 2',
      placeholder: 'casa, maroc'
    },
    {
      name: 'address3',
      type: 'text',
      label: 'Address Line 3',
      placeholder: 'casa, maroc'
    },
    {
      name: 'currency',
      type: 'select',
      label: 'Currency',
      placeholder: 'Select Currency',
      items: [
        { label: 'MAD, Dirham', value: 'dirham' },
        { label: 'Euro', value: 'euro' },
        { label: 'Dollar', value: 'dollar' }
      ]
    }
  ];

  const shape = {
    customerName: Yup.string().required('Customer Name is required'),
    phone: Yup.number()
      .required(t('Phone number is required'))
      .typeError(t('You must enter numbers'))
  };

  let customersList = [
    {
      id: '1',
      customerName: 'Customer 1',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      email: 'john.doe@gmail.com',
      customerType: 'Plumbing',
      description: 'Describe...',
      rate: 'rate',
      address1: 'Add 1',
      address2: '-',
      address3: 'Add 3',
      currency: 'MAD, dirham'
    },
    {
      id: '2',
      customerName: 'Customer 2',
      address: 'casa, maroc',
      phone: '+00212611223344',
      website: 'https://web-site.com',
      email: 'john.doe@gmail.com',
      customerType: 'Electrical',
      description: 'Describe 2...',
      rate: 'rate',
      address1: 'Add 1',
      address2: '-',
      address3: '-',
      currency: 'Euro'
    }
  ];

  const columns: GridEnrichedColDef[] = [
    {
      field: 'customerName',
      headerName: t('Customer Name'),
      description: t('Customer Name'),
      width: 150
    },
    {
      field: 'address',
      headerName: t('Address'),
      description: t('Address'),
      width: 150
    },
    {
      field: 'phone',
      headerName: t('Phone'),
      description: t('Phone'),
      width: 150
    },
    {
      field: 'website',
      headerName: t('Website'),
      description: t('Website'),
      width: 150
    },
    {
      field: 'email',
      headerName: t('Email'),
      description: t('Email'),
      width: 150
    },
    {
      field: 'customerType',
      headerName: t('Customer Type'),
      description: t('Customer Type'),
      width: 150
    },
    {
      field: 'description',
      headerName: t('Description'),
      description: t('Description'),
      width: 150
    },
    {
      field: 'rate',
      headerName: t('Rate'),
      description: t('Rate'),
      width: 150
    },
    {
      field: 'address1',
      headerName: t('Address Line 1'),
      description: t('Address Line 1'),
      width: 150
    },
    {
      field: 'address3',
      headerName: t('Address Line 2'),
      description: t('Address Line 2'),
      width: 150
    },
    {
      field: 'address3',
      headerName: t('Address Line 3'),
      description: t('Address Line 3'),
      width: 150
    },
    {
      field: 'currency',
      headerName: t('Currency'),
      description: t('Currency'),
      width: 150
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: t('Actions'),
      description: t('Actions'),
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key="delete"
          icon={<DeleteTwoToneIcon fontSize="small" color="error" />}
          onClick={() => {}}
          label="Delete"
        />
      ]
    }
  ];
  // const searchFilterProperties = ['customerName', 'customerType', 'email'];

  const RenderCustomersAddModal = () => (
    <Dialog fullWidth maxWidth="md" open={openModal} onClose={handleCloseModal}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Add Customer')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to create and add a new customer')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Form
            fields={fields}
            validation={Yup.object().shape(shape)}
            submitText={t('Add')}
            values={values || {}}
            onChange={({ field, e }) => {}}
            onSubmit={async (values) => {
              try {
                await wait(2000);
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );

  const RenderCustomersList = () => (
    <Box
      sx={{
        height: 400,
        width: '95%'
      }}
    >
      <CustomDataGrid
        rows={customersList}
        columns={columns}
        components={{
          Toolbar: GridToolbar
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {}
          }
        }}
        setOpenModal={setIsVendorDetailsOpen}
      />
    </Box>
  );


  const ModalCustomerDetails = () => (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isVendorDetailsOpen}
      onClose={() => {
        setIsVendorDetailsOpen(false);
      }}
    >
      <DialogTitle
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'row',
          // justifyContent: 'space-between',
        }}
      >
        <Typography variant="subtitle1" mr={2}>
          {t('Edit')}
        </Typography>
        <Typography variant="subtitle1">
          {t('Delete')}
        </Typography>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          p: 3
        }}
      >
        <Box>
          <Typography variant="h4" sx={{textAlign: 'center'}} gutterBottom>
            {t('McMaster-Carr')}
          </Typography>
          <Typography variant="subtitle1" sx={{textAlign: 'center', mb: 3}}>
            {t('Wide range of stock parts from screws to filters.')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Address')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('Rabat, Maroc')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Phone')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('06 22 33 44 55')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Website')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            <a href='http://www.website.com'>www.website.com</a>
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Name')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('John Doe')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Email')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('john.doe@email.com')}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            {t('Vendor Type')}
          </Typography>
          <Typography variant="h5" sx={{mb: 1}}>
            {t('General Parts')}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <ModalCustomerDetails />
      <RenderCustomersAddModal />
      <RenderCustomersList />
    </Box>
  );
};

export default Customers;
