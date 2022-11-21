import { ReactNode, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MultipleTabsLayout from '../components/MultipleTabsLayout';
import { TitleContext } from '../../../contexts/TitleContext';

interface SettingsLayoutProps {
  children?: ReactNode;
  tabIndex: number;
}

function SettingsLayout(props: SettingsLayoutProps) {
  const { children, tabIndex } = props;
  const { t }: { t: any } = useTranslation();
  const tabs = [
    { value: '', label: t('General Settings') },
    { value: 'work-order', label: t('Work order configuration') },
    { value: 'request', label: t('Request form configuration') },
    { value: 'roles', label: t('Roles') },
    { value: 'checklists', label: t('Checklists') }
  ];
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(t('Settings'));
  }, []);

  return (
    <MultipleTabsLayout
      basePath="/app/settings"
      tabs={tabs}
      tabIndex={tabIndex}
      title="Settings"
    >
      {children}
    </MultipleTabsLayout>
  );
}

export default SettingsLayout;
