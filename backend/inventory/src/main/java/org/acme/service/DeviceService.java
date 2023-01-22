package org.acme.service;

import java.security.KeyStore.Entry;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.acme.domain.Device;

@ApplicationScoped
public class DeviceService {
    @Inject
    private EntityManager entityManager;

    public List<Device> getAll(){
        TypedQuery<Device> query = entityManager.createQuery("FROM Device", Device.class);
        return query.getResultList();
    }

    public Device findDevice(int id){
        return entityManager.find(Device.class, id);
    }

    @Transactional
    public Device createDevice(Device device) {
        entityManager.persist(device);
        return device;
    }
}
