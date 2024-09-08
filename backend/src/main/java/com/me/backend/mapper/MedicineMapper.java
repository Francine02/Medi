package com.me.backend.mapper;

import com.me.backend.dtos.MedicineDTO;
import com.me.backend.entities.Medicine;

public class MedicineMapper {
    //Converter DTO para entidade
    public static Medicine toEntity(MedicineDTO medicineDTO){
        Medicine medicine = new Medicine();
        medicine.setId(medicineDTO.id());
        medicine.setName(medicineDTO.name());
        medicine.setDescription(medicineDTO.description());
        medicine.setDateTime(medicineDTO.dateTime());
        return medicine;
    }

    //Converter entidade para DTO
    public static MedicineDTO toDTO (Medicine medicine){
        return new MedicineDTO(
            medicine.getId(), 
            medicine.getName(), 
            medicine.getDescription(), 
            medicine.getDateTime());
    }
}
