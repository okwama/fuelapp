export type FuelType = 'petrol' | 'diesel' | 'super';

export type FuelPrice = {
  type: FuelType;
  pricePerLitre: number;
};

export type StationStatus = 'open' | 'closed';

export type Station = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  distanceKm: number;
  status: StationStatus;
  amenities?: string[];
  prices: Record<FuelType, number>;
};

export type Transaction = {
  id: string;
  stationId: string;
  stationName: string;
  date: string;
  litres: number;
  amountKsh: number;
  pointsEarned: number;
  fuelType: FuelType;
};

export type Favourite = {
  id: string;
  stationId: string;
};

export type NotificationPreference = {
  pushEnabled: boolean;
  priceAlertsEnabled: boolean;
};

export type UserProfile = {
  id: string;
  fullName: string;
  phoneNumber: string;
  vehicleRegistration: string;
  preferredFuel: FuelType;
  loyaltyPoints: number;
  notificationPreference: NotificationPreference;
};
