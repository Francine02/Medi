package com.me.backend.mapper;

import com.me.backend.dtos.MedicineDTO;
import com.me.backend.entities.Medicine;
import com.me.backend.entities.User;

public class MedicineMapper {
    //Converter DTO para entidade
    public static Medicine toEntity(MedicineDTO medicineDTO, User user){
        Medicine medicine = new Medicine();
        medicine.setId(medicineDTO.id());
        medicine.setName(medicineDTO.name());
        medicine.setDescription(medicineDTO.description());
        medicine.setDateTime(medicineDTO.dateTime());
        medicine.setUser(user);
        medicine.setEmailToSend(medicineDTO.emailToSend());
        return medicine;
    }

    //Converter entidade para DTO
    public static MedicineDTO toDTO (Medicine medicine){
        return new MedicineDTO(
            medicine.getId(), 
            medicine.getName(), 
            medicine.getDescription(), 
            medicine.getDateTime(), 
            medicine.getEmailToSend());
    }
}
