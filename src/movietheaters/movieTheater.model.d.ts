export interface movieTheaterDTO {
 id: number;
 name: string;   
}

export interface movieTheaterCreationDTO {
    name: string;
    latitude?: number;
    longitude?: number;
}