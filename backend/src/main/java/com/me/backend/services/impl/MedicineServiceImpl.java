package com.me.backend.services.impl;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.me.backend.dtos.MedicineDTO;
import com.me.backend.entities.Medicine;
import com.me.backend.entities.User;
import com.me.backend.mapper.MedicineMapper;
import com.me.backend.repositories.MedicineRepository;
import com.me.backend.repositories.UserRepository;
import com.me.backend.services.MedicineService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MedicineServiceImpl implements MedicineService {

    private final MedicineRepository medicineRepository;
    private final UserRepository userRepository;

    @Override
    public MedicineDTO saveMedicine(MedicineDTO medicineDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado! Email: " + email));

        Medicine medicine = MedicineMapper.toEntity(medicineDTO, user);// Converter DTO em entidade
        Medicine savedMedicine = medicineRepository.save(medicine);// Salvar no repositorio

        return MedicineMapper.toDTO(savedMedicine);// Converter a entidade salva de volta para DTO e retornar
    }

    @Override
    public List<MedicineDTO> getAllMedicines() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado! Email: " + email));

        List<Medicine> medicines = medicineRepository.findByUser(user);
        return medicines.stream()
                .map(MedicineMapper::toDTO)
                .toList();
    }

    @Override
    public MedicineDTO updateMedicine(Long id, MedicineDTO medicineDTO) {
        Medicine existingMedicine = medicineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medicamento não encontrado! Id: " + id));

        existingMedicine.setName(medicineDTO.name());
        existingMedicine.setDescription(medicineDTO.description());
        existingMedicine.setDateTime(medicineDTO.dateTime());
        existingMedicine.setEmailToSend(medicineDTO.emailToSend());

        Medicine updateMedicine = medicineRepository.save(existingMedicine);

        return MedicineMapper.toDTO(updateMedicine);
    }

    @Override
    public void deleteMedicine(Long id) {
        if (!medicineRepository.existsById(id)) {
            throw new RuntimeException("Medicamento cujo id não foi encontrado. Id: " + id);
        }
        medicineRepository.deleteById(id);
    }
}
