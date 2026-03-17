import { colors } from '@/constants/colors';
import { FuelType, StationStatus } from '@/types';

export const formatCurrencyKsh = (value: number) => `KSh ${value.toLocaleString('en-KE')}`;

export const formatLitres = (value: number) => `${value.toFixed(1)} L`;

export const formatDistanceKm = (value: number) => `${value.toFixed(1)} km`;

export const normalizeKenyanPhoneNumber = (phoneInput: string) => {
  const trimmed = phoneInput.replace(/\s+/g, '').replace(/-/g, '');
  if (trimmed.startsWith('+254')) {
    return trimmed;
  }
  if (trimmed.startsWith('254')) {
    return `+${trimmed}`;
  }
  if (trimmed.startsWith('0')) {
    return `+254${trimmed.slice(1)}`;
  }
  return `+254${trimmed}`;
};

export const getFuelColor = (fuel: FuelType) => {
  if (fuel === 'diesel') return colors.diesel;
  if (fuel === 'super') return colors.super;
  return colors.petrol;
};

export const getStationStatusLabel = (status: StationStatus) =>
  status === 'open' ? 'Open now' : 'Closed';
