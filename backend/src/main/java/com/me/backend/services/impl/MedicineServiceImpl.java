package com.me.backend.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.me.backend.dtos.MedicineDTO;
import com.me.backend.entities.Medicine;
import com.me.backend.mapper.MedicineMapper;
import com.me.backend.repositories.MedicineRepository;
import com.me.backend.services.MedicineService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MedicineServiceImpl implements MedicineService {

    private final MedicineRepository medicineRepository;

    @Override
    public MedicineDTO saveMedicine(MedicineDTO medicineDTO) {
        checkNameIfExist(medicineDTO);

        Medicine medicine = MedicineMapper.toEntity(medicineDTO);// Converter DTO em entidade
        Medicine savedMedicine = medicineRepository.save(medicine);// Salvar no repositorio

        return MedicineMapper.toDTO(savedMedicine);// Converter a entidade salva de volta para DTO e retornar
    }

    @Override
    public List<MedicineDTO> getAllMedicines() {
        List<Medicine> medicines = medicineRepository.findAll();
        return medicines.stream()
                .map(MedicineMapper::toDTO)
                .toList();
    }

    @Override
    public MedicineDTO updateMedicine(Long id, MedicineDTO medicineDTO) {
        Medicine existingMedicine = medicineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medicamento não encontrado! Id: " + id));

        // Verificar se o nome do medicamento já existe para outro registro
        medicineRepository.findByName(medicineDTO.name())
                .ifPresent(existing -> {
                    if (!existing.getId().equals(id)) {
                        throw new IllegalArgumentException(
                                "Nome do medicamento já existe! Não pode repetir: " + medicineDTO.name());
                    }
                });

        existingMedicine.setName(medicineDTO.name());
        existingMedicine.setDescription(medicineDTO.description());
        existingMedicine.setDateTime(medicineDTO.dateTime());

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

    private void checkNameIfExist(MedicineDTO medicineDTO) {
        medicineRepository.findByName(medicineDTO.name())
                .ifPresent(existing -> {
                    throw new IllegalArgumentException(
                            "Já existe medicamento com esse nome!! Não repita: " + medicineDTO.name());
                });
    }
}
